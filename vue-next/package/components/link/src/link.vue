<template>
  <a
    :class="[
      'apron-link',
      hoverUnderlined ? 'apron-link-hover-underlined' : '',
      underlined ? 'apron-link-underlined' : '',
      disabled ? 'apron-link-disabled' : ''
    ]"
    :href="disabled || !href ? undefined : href"
    :target="disabled || !href ? undefined : target"
    @click="handleClick"
  >
    <span v-if="$slots.default">
      <slot />
    </span>

    <!-- <slot v-if="$slots.icon" name="icon" /> -->
  </a>
</template>

<script lang="ts" setup>
import { linkEmits, linkProps } from './link'

defineOptions({
  name: 'ApLink',
})
const props = defineProps(linkProps)
const emit = defineEmits(linkEmits)

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>

<style src="./link.less" lang="less" scoped></style>