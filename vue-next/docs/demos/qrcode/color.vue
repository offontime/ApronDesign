<template>
  <ap-space>
    <div class="demo">
      <ap-qrcode text="Apron Design"></ap-qrcode>
    </div>
    <div class="demo demo-reverse-color">
      <ap-qrcode text="Apron Design" color="#FFFFFF" background-color="#393939"></ap-qrcode>
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