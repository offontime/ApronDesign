<script setup>
  import { QrCode } from '@code-apron/vue-next'
</script>

<template>
  <ap-space class="demo">
    <span>默认边距</span>
    <qr-code text="Apron Design" ></qr-code>
  </ap-space>
  <ap-space class="demo">
    <span>边 距：8</span>
    <qr-code text="Apron Design" :margin="8"></qr-code>
  </ap-space>
</template>

<style lang="less" scoped>
  .demo {
    padding: 20px;
    background: var(--color-background-hover);
  }
</style>