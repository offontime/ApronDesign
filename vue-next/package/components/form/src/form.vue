<template>
  <div :class="['apron-form']">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { formEmits, formProps } from './form'

defineOptions({
  name: 'ApForm',
})
const props = defineProps(formProps)
const emit = defineEmits(formEmits)
</script>

<style src="./form.less" lang="less" scoped></style>