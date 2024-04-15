<template>
  <div
    :class="['apron-empty', bordered ? 'apron-empty-container-bordered' : '']"
  >
    <div class="icon">
      <ap-icon :name="icon" :size="40" color="var(--color-text)" />
    </div>
    <div class="description">
      {{ description }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { emptyEmits, emptyProps } from './empty'

defineOptions({
  name: 'ApEmpty',
})
const props = defineProps(emptyProps)
const emit = defineEmits(emptyEmits)

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>

<style src="./empty.less" lang="less" scoped></style>