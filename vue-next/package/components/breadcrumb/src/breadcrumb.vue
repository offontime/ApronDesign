<template>
  <div class="apron-breadcrumb">
    <slot :parentSeparator="separator" peak="345" />
  </div>
</template>

<script lang="ts" setup>
import { provide } from 'vue'
import { breadcrumbProps } from './breadcrumb'

defineOptions({
  name: 'ApBreadcrumb',
})
const props = defineProps(breadcrumbProps)
provide('parentSeparator', props.separator)
</script>

<style src="./breadcrumb.less" lang="less"></style>