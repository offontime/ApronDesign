<template>
  <div :class="[
    'apron-input',
    isFocus || modelValue ? 'apron-input-filled' : '',
    disabled ? 'apron-input-disabled' : ''
    ]">
    <div class="apron-input-prepend" v-if="$slots.prepend || prepend">
      {{ prepend }}
    </div>
    <div class="input-container">
      <input
        :value="inputValue"
        :placeholder="placeholder"
        :type="type !== 'password' ? type : passwordView ? 'text' : 'password'"
        :disabled="disabled"
        @focus="handleInputFocus"
        @blur="handleInputBlur"
        @change="handleValueChange"
        @input="handleInputInput"
        @keydown="handleInputKeyPress"
      />
      <div class="append-button-container">
        <div v-if="allowClear && inputValue" class="append-button allow-clear-control" @click="handleInputClear">
          <ap-icon name="error-circle" :size="20" color="var(--color-text)" />
        </div>
        <div v-if="type === 'password'" class="append-button password-controls" @click="handlePasswordViewToggle">
          <ap-icon v-if="passwordView" name="eye-close" :size="20" color="var(--color-text)" />
          <ap-icon v-else name="eye-open" :size="20" color="var(--color-text)" />
        </div>
      </div>
    </div>
    <div class="apron-input-append" v-if="$slots.append || append">
      {{ append }}
    </div>
    <ap-button class="search-button" v-if="search" type="primary" @click="handleInputSearch">
      <ap-icon
        v-if="search.useIcon"
        :name="search.iconName || 'search'"
        color="var(--color-background)"
        :size="search.searchText ? 14 : 20" />
      {{ search.searchText }}
    </ap-button>
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
const passwordView = ref(false) // 当密码模式时，是否显示密码

onMounted(() => {
  inputValue.value = props.modelValue
})

watch(() => props.modelValue, (newVal) => {
  inputValue.value = newVal
}, { deep: true })

const handleInputFocus = (event: any) => {
  isFocus.value = true
  emit('focus', event)
}

const handleInputBlur = (event: any) => {
  isFocus.value = false
  emit('blur', event)
}

const handleInputSearch = (event: any) => {
  emit('search', event)
}

const handleValueChange = (event: any) => {
  emit('change', event)
}

const handleInputClear = (event: any) => {
  inputValue.value = ''
  emit('update:modelValue', '')
  emit('clear', event)
}

const handleInputKeyPress = (event: any) => {
  const { keyCode } = event
  const isEnterKey = keyCode === 13
  if (isEnterKey) {
    emit('enter', event)
  }
}

const handlePasswordViewToggle = () => {
  passwordView.value = !passwordView.value
}

const handleInputInput = (event: any) => {
  const newValue = event.target.value
  inputValue.value = newValue
  emit('update:modelValue', newValue)
  emit('input', event)
}
</script>

<style src="./input.less" lang="less" scoped></style>