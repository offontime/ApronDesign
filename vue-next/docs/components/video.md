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
`Video` 组件自动占满整个父容器。所以需要给承载 `Video` 组件的容器设置宽高。

:::preview
demo-preview=../demos/video/basic-usage.vue
:::

- 使用 poster 属性为 `Video` 组件配置视频封面；
- 为 `Video` 组件配置 mode 属性（即 css 的 object-fit 属性值）可以配置视频播放时的裁切方式；
- `Video` 组件支持 HTML5 video 标签的 playsinline、muted 和 autoplay 属性；
- `Video` 组件的 volume 属性的取值范围是 0～100，与 video 标签的取值范围 0～1 有所差别。

### 配置视频源
向 `Video` 组件的 source 属性传入一个 url，即可直接展示和播放视频（如“基本用法”部分展示）

【多视频、视频列表将在下一版本更新】

### 配置视频组件右侧的按钮
向 `Video` 组件的 buttons 属性传入一个数组，即可配置右侧显示的按钮。

默认情况下，只显示一个全屏按钮，配置数组为：
```javascript
['fullscreen']
```

数组中每一个元素接收两种形式的数据：字符串和对象。其中，以字符串传入的按钮接受：
- fullscreen 全屏按钮

你也可以传入对象来自定义按钮和回调函数用以个性化的配置。对象中的 key 见 `<video.buttons>` Props 表。

其中，`image` 和 `icon` 至少要传一个，`image` 的优先级更高。

:::preview
demo-preview=../demos/video/buttons.vue
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

<!-- ### `<video.source>` Props（未上线）
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| name | 视频名称 | String | - | - | - |
| poster | 视频封面 | String | - | - | - |
| url | 视频地址 | String | - | - | - |
| summary | 视频简介/摘要 | String | - | - | - |
| cc | cc 字幕 | String | - | - | - | -->

### `<video.buttons>` Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| name | 按钮名称 | String | - | - | - |
| image | 按钮图片 | String, Vue Component | - | - | 与 icon 必选一个，具有高优先级 |
| icon | 按钮图标 | String | - | - | 与 image 必选一个，使用 Icon Apron 的 name |
| callback | 回调函数 | Function | - | - | - |