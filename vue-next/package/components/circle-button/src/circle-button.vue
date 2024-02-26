<template>
  <button
    :class="[
      'apron-circle-button',
      `apron-circle-button__${isPrimary ? 'primary' : isMain ? 'main' : 'default'}`,
      disabled ? 'apron-circle-button-disabled': '',
      danger ? 'apron-circle-button__danger' : '',
      `apron-circle-button-theme__${theme}`
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <span class="slot" v-if="$slots.default">
      <slot />
    </span>

    <!-- <slot v-if="$slots.icon" name="icon" /> -->
  </button>
</template>

<script lang="ts" setup>
import { circleButtonEmits, circleButtonProps } from './circle-button'

defineOptions({
  name: 'ApCircleButton',
})
const props = defineProps(circleButtonProps)
const emit = defineEmits(circleButtonEmits)

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>

<style src="./circle-button.less" lang="less" scoped></style>