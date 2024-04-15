<template>
  <div
    :class="['apron-spin', loading ? 'apron-spin-loading' : '', `apron-spin-${position}`]">
    <div class="slot">
      <slot></slot>
    </div>
    <div class="cover">
      <div class="loading-container">
        <img v-if="name === 'cube'" class="loading-icon" src="./images/cube.svg" />
        <img v-else-if="name === 'disk'" class="loading-icon" src="./images/disk.svg" />
        <img v-else-if="name === 'dual-ring'" class="loading-icon" src="./images/dual-ring.svg" />
        <img v-else-if="name === 'mobius'" class="loading-icon" src="./images/mobius.svg" />
        <img v-else-if="name === 'pulse'" class="loading-icon" src="./images/pulse.svg" />
        <img v-else-if="name === 'rolling'" class="loading-icon" src="./images/rolling.svg" />
        <img v-else-if="name === 'spinner'" class="loading-icon" src="./images/spinner.svg" />
        <img v-else class="loading-icon" src="./images/spinning.svg" />
        <div class="loading-content">{{ content }}</div>
      </div>
    </div>  
  </div>
</template>

<script lang="ts" setup>
import { spinEmits, spinProps } from './spin'

defineOptions({
  name: 'ApSpin',
})
const props = defineProps(spinProps)
const emit = defineEmits(spinEmits)
</script>

<style src="./spin.less" lang="less" scoped></style>