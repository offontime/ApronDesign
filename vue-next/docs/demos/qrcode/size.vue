<script setup>
  import { QrCode } from '@code-apron/vue-next'
</script>

<template>
  <ap-space class="demo">
    <span>尺寸：200</span>
    <qr-code text="Apron Design" :size="200"></qr-code>
  </ap-space>
  <ap-space class="demo">
    <span>尺寸：300</span>
    <qr-code text="Apron Design" :size="300"></qr-code>
  </ap-space>
</template>

<style lang="less" scoped>
  .demo {
  }
</style>