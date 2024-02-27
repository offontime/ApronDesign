<script setup>
  import { QrCode } from '@code-apron/vue-next'
</script>

<template>
  <ap-space>
    <div class="demo">
      <qr-code text="Apron Design"></qr-code>
    </div>
    <div class="demo demo-reverse-color">
      <qr-code text="Apron Design" color="#FFFFFF" background-color="#393939"></qr-code>
    </div>
  </ap-space>
</template>

<style lang="less" scoped>
  .demo {
    background: var(--color-background-hover);
  }
  .demo-reverse-color {
    background: var(--color-primary);
  }
</style>