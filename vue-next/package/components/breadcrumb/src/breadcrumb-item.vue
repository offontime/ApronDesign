<template>
  <div class="apron-breadcrumb-item apron-breadcrumb-item__default">
    <span class="apron-breadcrumb-item-separator">
      <span>{{ separator || parentSeparator }}</span>
    </span>
    <ap-link v-if="href" class="apron-breadcrumb-item-text" :href="href" :target="target">
      <slot />
    </ap-link>
    <span v-else class="apron-breadcrumb-item-text">
      <slot />
    </span>
  </div>
</template>

<script lang="ts" setup>
import { inject, onMounted } from 'vue'
import { breadcrumbItemProps } from './breadcrumb-item'

defineOptions({
  name: 'ApBreadcrumbItem',
})
const props = defineProps(breadcrumbItemProps)
const parentSeparator = inject('parentSeparator')
</script>

<style src="./breadcrumb-item.less" lang="less"></style>