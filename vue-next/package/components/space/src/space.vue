<template>
  <div :class="[
    'apron-space',
    `apron-${direction}-space`
  ]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { spaceProps } from './space'

defineOptions({
  name: 'ApSpace',
})
const props = defineProps(spaceProps)
</script>

<style src="./space.less" lang="less"></style>