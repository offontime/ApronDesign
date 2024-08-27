<template>
  <div :class="['apron-input', isFocus || modelValue ? 'apron-input-filled' : '']">
    <div class="apron-input-prepend" v-if="$slots.prepend || prepend">
      {{ prepend }}
    </div>
    <input
      :value="inputValue"
      :placeholder="placeholder"
      @focus="handleInputFocus"
      @blur="handleInputBlur"
      @change="handleValueChange"
      @input="handleInputInput"
    />
    <div class="apron-input-append" v-if="$slots.append || append">
      {{ append }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { inputEmits, inputProps } from './input'

defineOptions({
  name: 'ApInput',
})
const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

const inputValue = ref('')
const isFocus = ref(false)

onMounted(() => {
  inputValue.value = props.modelValue
})

watch(() => props.modelValue, (newVal) => {
  inputValue.value = newVal
}, { deep: true })

const handleInputFocus = () => {
  isFocus.value = true
}

const handleInputBlur = () => {
  isFocus.value = false
}

const handleValueChange = () => {
  
}

const handleInputInput = (event: any) => {
  const newValue = event.target.value
  inputValue.value = newValue
  emit('update:modelValue', newValue)
  emit('input', event)
}

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>

<style src="./input.less" lang="less" scoped></style>