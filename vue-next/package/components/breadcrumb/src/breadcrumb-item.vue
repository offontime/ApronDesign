<template>
  <div class="apron-breadcrumb-item apron-breadcrumb-item__default">
    <span class="apron-breadcrumb-item-separator">
      <span>{{ separator }}</span>
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
import { breadcrumbItemEmits, breadcrumbItemProps } from './breadcrumb-item'

defineOptions({
  name: 'ApBreadcrumbItem',
})
const props = defineProps(breadcrumbItemProps)
const emit = defineEmits(breadcrumbItemEmits)

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>

<style src="./breadcrumb-item.less" lang="less"></style>