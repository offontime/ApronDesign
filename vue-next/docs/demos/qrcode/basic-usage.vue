<script setup>
  import { QrCode } from '@code-apron/vue-next'
</script>

<template>
  <div class="demo">
    <qr-code text="Apron Design"></qr-code>
  </div>
</template>

<style lang="less" scoped>
  .demo {
    width: 200px;
  }
</style>