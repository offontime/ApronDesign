---
title: 视频播放器 Video - 组件
editLink: true
---

<ap-breadcrumb>
  <ap-breadcrumb-item>组件</ap-breadcrumb-item>
  <ap-breadcrumb-item>媒体</ap-breadcrumb-item>
</ap-breadcrumb>

# 视频播放器 Video
> Apron Design 拥有独立的媒体播放器项目，以保证组件库项目本身不会过于臃肿。

`Media Apron` 是 Apron Design 的分支组件包（当前版本为：1.1.0），需要依赖 `@icon-apron/vue-next` 使用，请确保使用前先安装了 Icon Apron。

使用视频播放器组件，你需要额外安装 `@media-apron/vue-next` 组件包。

```bash
# npm
npm install @media-apron/vue-next --save-dev

# yarn
yarn add -D @media-apron/vue-next

# pnpm
pnpm install @media-apron/vue-next --save-dev
```

## 基本用法
```typescript
// main.ts
import MediaApron from '@media-apron/vue-next'
app.use(MediaApron)
```
:::preview
demo-preview=../demos/video/basic-usage.vue
:::


# API

### `<video>` Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| source | 视频地址 | String, Array(String), Array(Object) | - | - | Array(Object) 见 `<video.source>` 表 |
| poster | 视频封面 | String | - | - | - |
| mode | 视频在容器中的模式 | String | cover, contain, fill, ... | contain | 使用 css 中的 `object-fit` 属性 |
| playsinline | 在 inline 模式中播放 | Boolean | - | false | 在移动端配置此参数可以在 inline 模式中播放 |
| muted | 静音 | Boolean | - | false | - |
| autoplay | 自动播放 | Boolean | - | false | - |
| buttons | 配置视频按钮 | Array(String || Object) | - | ['fullscreen'] | Array(String || Object) 见 `<video.buttons>` 表 |
| volume | 音量 | Number | 0～100 | 100 | - |

### `<video.source>` Props（未上线）
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| name | 视频名称 | String | - | - | - |
| poster | 视频封面 | String | - | - | - |
| url | 视频地址 | String | - | - | - |
| summary | 视频简介/摘要 | String | - | - | - |
| cc | cc 字母 | String | - | - | - |

### `<video.buttons>` Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| name | 按钮名称 | String | - | - | - |
| image | 按钮图片 | String, Vue Component | - | - | 与 icon 必选一个，具有高优先级 |
| icon | 按钮图标 | String | - | - | 与 image 必选一个，使用 Icon Apron 的 name |
| callback | 回调函数 | Function | - | - | - |