<template>
  <h4>theme: halo</h4>
  <div class="demo">
    <div>常规按钮</div>
    <ap-circle-button isPrimary theme="halo">主要按钮</ap-circle-button>
    <ap-circle-button isMain theme="halo">次级按钮</ap-circle-button>
    <ap-circle-button theme="halo">默认按钮</ap-circle-button>
  </div>
  <div class="demo">
    <div>危险按钮</div>
    <ap-circle-button isPrimary theme="halo" danger>主要按钮</ap-circle-button>
    <ap-circle-button isMain theme="halo" danger>次级按钮</ap-circle-button>
    <ap-circle-button theme="halo" danger>默认按钮</ap-circle-button>
  </div>
</template>

<style lang="less" scoped>
.demo {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
  & > * {
    margin-left: 50px;
    &:first-child {
      margin-left: 0;
    }
  }
}
</style>