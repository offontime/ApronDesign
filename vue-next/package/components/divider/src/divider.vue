<template>
  <div class="apron-divider" :style="{ borderBottomStyle: lineStyle }">
    <span v-if="$slots.default" :class="['apron-divider-orientation', `apron-divider-${orientation}`]">
      <slot />
    </span>
  </div>
</template>

<script lang="ts" setup>
import { dividerEmits, dividerProps } from './divider'

defineOptions({
  name: 'ApDivider',
})
const props = defineProps(dividerProps)
const emit = defineEmits(dividerEmits)

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>

<style src="./divider.less" lang="less" scoped></style>