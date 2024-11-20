<template>
  <div :class="['apron-form-item']">
    <div v-if="props.label" class="apron-form-item-label">{{ props.label }}</div>
    <div class="apron-form-item-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formItemEmits, formItemProps } from './form-item'

defineOptions({
  name: 'ApFormItem',
})
const props = defineProps(formItemProps)
const emit = defineEmits(formItemEmits)
</script>

<style src="./form-item.less" lang="less" scoped></style>