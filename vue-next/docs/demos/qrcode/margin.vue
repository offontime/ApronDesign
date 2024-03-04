<template>
  <ap-space class="demo">
    <span>默认边距</span>
    <ap-qrcode text="Apron Design" ></ap-qrcode>
  </ap-space>
  <ap-space class="demo">
    <span>边 距：8</span>
    <ap-qrcode text="Apron Design" :margin="8"></ap-qrcode>
  </ap-space>
</template>

<style lang="less" scoped>
  .demo {
    padding: 20px;
    background: var(--color-background-hover);
  }
</style>