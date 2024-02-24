<template>
  <ap-space class="demo">
    <ap-button type="primary">Primary Button</ap-button>
    <ap-button type="primary" danger>Danger Primary Button</ap-button>
  </ap-space>
  <ap-space class="demo">
    <ap-button type="main">Main Button</ap-button>
    <ap-button type="main" danger>Danger Main Button</ap-button>
  </ap-space>
  <ap-space class="demo">
    <ap-button>Default Button</ap-button>
    <ap-button danger>Danger Default Button</ap-button>
  </ap-space>
  <ap-space class="demo">
    <ap-button type="dashed">Dashed Button</ap-button>
    <ap-button type="dashed" danger>Danger Dashed Button</ap-button>
  </ap-space>
  <ap-space class="demo">
    <ap-button type="text">Text Button</ap-button>
    <ap-button type="text" danger>Danger Text Button</ap-button>
  </ap-space>
  <ap-space class="demo">
    <ap-button type="link">Link Button</ap-button>
    <ap-button type="link" danger>Danger Link Button</ap-button>
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