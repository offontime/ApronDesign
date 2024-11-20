<template>
  <span
    :class="[
      'apron-checkbox',
      modelValue ? 'apron-checkbox-checked' : '',
      indeterminate ? 'apron-checkbox-indeterminate' : '',
      disabled ? 'apron-checkbox-disabled' : ''
    ]"
  >
    <span class="apron-check" @click="handleClick">
      <ap-icon v-if="modelValue" name="success" :color="disabled ? '#C2C2C2' : 'var(--color-background)'" />
      <ap-icon v-else-if="indeterminate" name="minus" :color="disabled ? '#C2C2C2' : 'var(--color-background)'" />
      <ap-icon v-else color="transparent"></ap-icon>
    </span>
    <span v-if="$slots.default" class="slot">
      <slot />
    </span>
  </span>
</template>

<script lang="ts" setup>
import { checkboxEmits, checkboxProps } from './checkbox'

defineOptions({
  name: 'ApCheckbox',
})
const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)

function handleClick(event: MouseEvent) {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue)
    emit('click', event)
  }
}
</script>

<style src="./checkbox.less" lang="less" scoped></style>