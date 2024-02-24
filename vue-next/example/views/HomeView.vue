<script setup lang="ts">
</script>

<template>
  <div class="main-container">
    <div clas="section">
      <h1>Divider</h1>
      <ap-divider />
      <ap-divider orientation="left">Text</ap-divider>
      <ap-divider>Text</ap-divider>
      <ap-divider orientation="right">Text</ap-divider>
      <ap-divider orientation="center" line-style="dashed">Text</ap-divider>
    </div>
    <div class="section">
      <h1>Breadcrumb</h1>
      <div>
        <ap-breadcrumb>
          <ap-breadcrumb-item href="https://www.mitkimi.com">Vue3</ap-breadcrumb-item>
          <ap-breadcrumb-item>组件</ap-breadcrumb-item>
          <ap-breadcrumb-item>导航</ap-breadcrumb-item>
          <ap-breadcrumb-item>面包屑</ap-breadcrumb-item>
        </ap-breadcrumb>
      </div>
    </div>
    <div class="section">
      <h1>button</h1>
      <div>
        <h4>primary</h4>
        <ap-space>
          <ap-button type="primary">primary button</ap-button>
          <ap-button type="primary" danger>primary button</ap-button>
          <ap-button type="primary" disabled>primary button</ap-button>
          <ap-button type="primary" disabled danger>primary button</ap-button>
        </ap-space>
      </div>
      <div>
        <h4>main</h4>
        <ap-space>
          <ap-button type="main">main button</ap-button>
          <ap-button type="main" danger>main button</ap-button>
          <ap-button type="main" disabled>main button</ap-button>
          <ap-button type="main" disabled danger>main button</ap-button>
        </ap-space>
      </div>
      <div>
        <h4>default</h4>
        <ap-space>
          <ap-button type="default">default button</ap-button>
          <ap-button type="default" danger>default button</ap-button>
          <ap-button type="default" disabled>default button</ap-button>
          <ap-button type="default" disabled danger>default button</ap-button>
        </ap-space>
      </div>
      <div>
        <h4>dashed</h4>
        <ap-space>
          <ap-button type="dashed">dashed button</ap-button>
          <ap-button type="dashed" danger>dashed button</ap-button>
          <ap-button type="dashed" disabled>dashed button</ap-button>
          <ap-button type="dashed" disabled danger>dashed button</ap-button>
        </ap-space>
      </div>
      <div>
        <h4>text</h4>
        <ap-space>
          <ap-button type="text">text button</ap-button>
          <ap-button type="text" danger>text button</ap-button>
          <ap-button type="text" disabled>text button</ap-button>
          <ap-button type="text" disabled danger>text button</ap-button>
        </ap-space>
      </div>
      <div>
        <h4>link</h4>
        <ap-space>
          <ap-button type="link">link button</ap-button>
          <ap-button type="link" danger>link button</ap-button>
          <ap-button type="link" disabled>link button</ap-button>
          <ap-button type="link" disabled danger>link button</ap-button>
        </ap-space>
      </div>
      <div>
        <h4>size</h4>
        <ap-space>
          <ap-button type="primary">primary button</ap-button>
          <ap-button type="primary" size="small">primary button</ap-button>
        </ap-space>
      </div>
      <div>
        <h4>fluid</h4>
        <ap-space>
          <ap-button type="primary" fluid>primary button</ap-button>
        </ap-space>
      </div>
    </div>
    <div class="section">
      <h1>link</h1>
      <ap-space>
        <ap-link href="#">normal</ap-link>
        <ap-link href="#" disabled>disabled</ap-link>
        <ap-link href="#" hoverUnderlined>hover underlined</ap-link>
        <ap-link href="#" hoverUnderlined disabled>hover underlined disabled</ap-link>
        <ap-link href="#" underlined>underlined</ap-link>
        <ap-link href="#" underlined disabled>underlined disabled</ap-link>
      </ap-space>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main-contianer {
  min-height: 100vh;
  padding: 100px 30px;
  .section {
    margin-top: 20px;
  }
}
</style>
