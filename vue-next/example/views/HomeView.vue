<script setup lang="ts">
import { ref } from 'vue'
const switchValue = ref(false)
</script>

<template>
  <div class="main-container">
    <div class="section">
      <h1>Circle Button</h1>
      <ap-space class="with-divider-space">
        <ap-circle-button isPrimary>主要按钮</ap-circle-button>
        <ap-circle-button isPrimary danger>一键登录</ap-circle-button>
        <ap-circle-button isPrimary disabled>禁用按钮</ap-circle-button>
      </ap-space>
      <ap-space class="with-divider-space">
        <ap-circle-button isMain>次级按钮</ap-circle-button>
        <ap-circle-button isMain danger>一键登录</ap-circle-button>
        <ap-circle-button isMain disabled>禁用按钮</ap-circle-button>
      </ap-space>
      <ap-space class="with-divider-space">
        <ap-circle-button>默认按钮</ap-circle-button>
        <ap-circle-button danger>一键登录</ap-circle-button>
        <ap-circle-button disabled>禁用按钮</ap-circle-button>
      </ap-space>
      <ap-space class="with-divider-space">
        <ap-circle-button isPrimary theme="halo">Halo</ap-circle-button>
        <ap-circle-button isPrimary theme="halo" danger>Halo</ap-circle-button>
        <ap-circle-button isMain theme="halo">Halo</ap-circle-button>
        <ap-circle-button isMain theme="halo" danger>Halo</ap-circle-button>
        <ap-circle-button theme="halo">Halo</ap-circle-button>
        <ap-circle-button theme="halo" danger>Halo</ap-circle-button>
      </ap-space>
      <ap-space class="with-divider-space">
        <ap-circle-button isPrimary theme="ripple">Ripple</ap-circle-button>
        <ap-circle-button isPrimary theme="ripple" danger>Ripple</ap-circle-button>
        <ap-circle-button isMain theme="ripple">Ripple</ap-circle-button>
        <ap-circle-button isMain theme="ripple" danger>Ripple</ap-circle-button>
        <ap-circle-button theme="ripple">Ripple</ap-circle-button>
        <ap-circle-button theme="ripple" danger>Ripple</ap-circle-button>
      </ap-space>
    </div>
    <div class="section">
      <h1>Timeline</h1>
      <ap-timeline>
        <ap-timeline-item label="2023/11/27">第一个时间节点</ap-timeline-item>
        <ap-timeline-item label="2023/11/28">第二个时间节点</ap-timeline-item>
        <ap-timeline-item label="2023/11/29">第三个时间节点</ap-timeline-item>
      </ap-timeline>
    </div>
    <div class="section">
      <h1>Switch</h1>
      <ap-space>
        <ap-switch v-model="switchValue" isPrimary />
        <ap-switch v-model="switchValue" size="small" disabled />
      </ap-space>
      <ap-space>
        <span>switchValue value:</span>
        <span>{{ switchValue }}</span>
      </ap-space>
    </div>
    <div clas="section">
      <h1>Divider</h1>
      <p>0</p>
      <ap-divider />
      <p>1</p>
      <ap-divider orientation="left">Text</ap-divider>
      <p>2</p>
      <ap-divider>Text</ap-divider>
      <p>3</p>
      <ap-divider orientation="right">Text</ap-divider>
      <p>4</p>
      <ap-divider orientation="center" line-style="dashed">Text</ap-divider>
    </div>
    <div class="section">
      <h1>Breadcrumb</h1>
      <div>
        <ap-breadcrumb separator=":">
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
.main-container {
  min-height: 100vh;
  padding: 100px 30px;
  .section {
    margin-top: 20px;
    .with-divider-space {
      margin: 40px 0;
      & > * {
        margin-right: 50px;
      }
    }
  }
}
</style>
