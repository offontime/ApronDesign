<template>
  <ap-space class="demo">
    <ap-button type="primary">Primary Button</ap-button>
    <ap-button type="primary" disabled>Primary Button(Disabled)</ap-button>
    <ap-button type="primary" danger>Primary Button</ap-button>
    <ap-button type="primary" disabled danger>Primary Button(Disabled)</ap-button>
  </ap-space>
  <ap-space class="demo">
    <ap-button>Default Button</ap-button>
    <ap-button disabled>Default Button(Disabled)</ap-button>
    <ap-button danger>Default Button</ap-button>
    <ap-button disabled danger>Default Button(Disabled)</ap-button>
  </ap-space>
  <ap-space class="demo">
    <ap-button type="dashed">Dashed Button</ap-button>
    <ap-button type="dashed" disabled>Dashed Button(Disabled)</ap-button>
    <ap-button type="dashed" danger>Dashed Button</ap-button>
    <ap-button type="dashed" disabled danger>Dashed Button(Disabled)</ap-button>
  </ap-space>
  <ap-space class="demo">
    <ap-button type="text">Text Button</ap-button>
    <ap-button type="text" disabled>Text Button(Disabled)</ap-button>
    <ap-button type="text" danger>Text Button</ap-button>
    <ap-button type="text" disabled danger>Text Button(Disabled)</ap-button>
  </ap-space>
  <ap-space class="demo">
    <ap-button type="link">Link Button</ap-button>
    <ap-button type="link" disabled>Link Button(Disabled)</ap-button>
    <ap-button type="link" danger>Link Button</ap-button>
    <ap-button type="link" disabled danger>Link Button(Disabled)</ap-button>
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