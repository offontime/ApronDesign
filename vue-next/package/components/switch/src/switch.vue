<template>
  <button
    :class="['apron-switch', `apron-${size}-switch`, `apron-switch-${isChecked ? 'checked' : 'unchecked'}`]"
    @click="handleClick"
    :disabled="disabled"
    :style="{
      background: isChecked ? (isPrimary ? 'var(--color-primary)' : checkedColor) : uncheckedColor
    }"
  >
    <div class="apron-switch-handler"></div>
    <!-- <slot v-if="$slots.icon" name="icon" /> -->
  </button>
</template>

<script lang="ts" setup>
import { defineModel } from 'vue'
import { switchEmits, switchProps } from './switch'
const isChecked = defineModel({
  default: false
})
defineOptions({
  name: 'ApSwitch',
})
const props = defineProps(switchProps)
const emit = defineEmits(switchEmits)

function handleClick(event: MouseEvent) {
  if (!props.disabled) {
    const nextVal = !isChecked.value
    isChecked.value = nextVal
    console.log(event)
    emit('click', event)
  }
}
</script>

<style src="./switch.less" lang="less" scoped></style>