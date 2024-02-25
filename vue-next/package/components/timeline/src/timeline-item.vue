<template>
  <div :class="[
    'apron-timeline-item',
    'apron-timeline-item-align-left'
  ]">
    <div class="apron-timeline-item__dot"></div>
    <div class="apron-timeline-item-container">
      <div class="apron-timeline-item__text" v-if="$slots.default">
        <slot />
      </div>
      <div class="apron-timeline-item__label">{{ label }}</div>
    </div>
    <!-- <slot v-if="$slots.icon" name="icon" /> -->
  </div>
</template>

<script lang="ts" setup>
import { timelineItemProps } from './timeline-item'

defineOptions({
  name: 'ApTimelineItem',
})
const props = defineProps(timelineItemProps)
</script>

<style src="./timeline.less" lang="less" scoped></style>