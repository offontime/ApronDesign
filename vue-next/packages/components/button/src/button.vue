<template>
  <button
    :class="[
      'apron-button',
      `apron-${size}-size-button`,
      `apron-${type}-button`,
      danger ? 'apron-danger-button' : '',
      fluid ? 'apron-fluid-button' : ''
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>
import { buttonEmits, buttonProps } from './button'

defineOptions({
  name: 'ApButton',
})
const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>

<style src="./button.less" lang="less" scoped></style>