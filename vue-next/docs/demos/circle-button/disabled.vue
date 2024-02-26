<template>
  <div class="demo">
    <ap-circle-button isPrimary disabled>主要按钮</ap-circle-button>
    <ap-circle-button isMain disabled>次级按钮</ap-circle-button>
    <ap-circle-button disabled>默认按钮</ap-circle-button>
  </div>
</template>

<style lang="less" scoped>
.demo {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  & > * {
    margin-left: 50px;
    &:first-child {
      margin-left: 0;
    }
  }
}
</style>