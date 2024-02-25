<template>
  <div
    class="apron-timeline">
    <span v-if="$slots.default">
      <slot />
    </span>
    <!-- <slot v-if="$slots.icon" name="icon" /> -->
  </div>
</template>

<script lang="ts" setup>
import { timelineProps } from './timeline'

defineOptions({
  name: 'ApTimeline',
})
const props = defineProps(timelineProps)
</script>

<style src="./timeline.less" lang="less" scoped></style>