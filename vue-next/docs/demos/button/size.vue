<template>
  <ap-space class="demo">
    <ap-button type="primary">Standard</ap-button>
    <ap-button type="primary">Standard button with overflow content</ap-button>
  </ap-space>
  <ap-space class="demo">
    <ap-button type="primary" size="small">Small</ap-button>
    <ap-button type="primary" size="small">Small button with overflow content</ap-button>
  </ap-space>
</template>

<style lang="less" scoped>
  .demo {
    margin-top: 20px;
    &:first-child {
      margin-top: 0;
    }
  }
</style>