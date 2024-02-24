<template>
  <div class="apron-breadcrumb">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { breadcrumbEmits, breadcrumbProps } from './breadcrumb'

defineOptions({
  name: 'ApBreadcrumb',
})
const props = defineProps(breadcrumbProps)
const emit = defineEmits(breadcrumbEmits)

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>

<style src="./breadcrumb.less" lang="less"></style>