<template>
  <div
    :class="[
      'apron-select',
      isSelectActive ? 'apron-select-active' : '',
      fluid ? 'apron-select-fluid' : '',
      modelValue ? 'apron-select-focus' : '',
      disabled ? 'apron-select-disabled' : '',
      allowBlock ? 'apron-block-select' : 'apron-float-select'
    ]"
    @click="handleSelectToggle"
    @mouseover="() => allowHover && handleSelectOpen()"
    @focus="handleSelectOpen"
    @blur="handleSelectClose"
  >
    <div class="apron-select-head">
      <div class="selected-item">{{ modelValue ? (() => {
        let ret = modelValue
        options.map(e => {
          if (e.value === modelValue)
          ret = e.label
        })
        return ret
      })(): placeholder }}</div>
      <div class="select-arrow">
        <ap-icon name="caret-down" :size="14" />
      </div>
    </div>
    <div class="apron-select-option-container">
      <div
        :class="['apron-select-option-item', item.value === modelValue ? 'apron-select-option-item-active' : '']"
        v-for="item in options"
        :key="`apron-select-item-${item.value}`"
        @click="(e) => handleSelect(e, item)">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { selectEmits, selectProps } from './select'

defineOptions({
  name: 'ApSelect',
})

const isSelectActive = ref(false)

const props = defineProps(selectProps)
const emit = defineEmits(selectEmits)

function handleSelect(event: MouseEvent, item) {
  if (props.disabled) return
  emit('click', event)
  emit('update:modelValue', item.value)
}

const handleSelectToggle = () => {
  isSelectActive.value = !isSelectActive.value
}
const handleSelectOpen = () => {
  isSelectActive.value = true
}
const handleSelectClose = () => {
  isSelectActive.value = false
}
</script>

<style src="./select.less" lang="less" scoped></style>