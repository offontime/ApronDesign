<template>
  <ap-space class="demo">
    <span>使用主要按钮颜色：</span>
    <ap-switch isPrimary size="small" />
  </ap-space>
  <ap-space class="demo">
    <span>使用自定义颜色颜色：</span>
    <ap-switch checked-color="var(--color-success)" unchecked-color="var(--color-error)" size="small" />
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