---
title: 音频播放器 Audio - 组件
editLink: true
---

<ap-breadcrumb>
  <ap-breadcrumb-item>组件</ap-breadcrumb-item>
  <ap-breadcrumb-item>媒体</ap-breadcrumb-item>
</ap-breadcrumb>

# 音频播放器 Audio
> Apron Design 拥有独立的媒体播放器项目，以保证组件库项目本身不会过于臃肿。


`Media Apron` 是 Apron Design 的分支组件包（当前版本为：1.2.0），需要依赖 `@icon-apron/vue-next` 使用，请确保使用前先安装了 Icon Apron。

使用音频播放器组件，你需要额外安装 `@media-apron/vue-next` 组件包。

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
`Audio` 组件会自动占满整个父的宽度，高度固定。所以要给承载 `Audio` 组件的容器设置宽度。

:::preview
demo-preview=../demos/audio/basic-usage.vue
:::

音乐：`Ambala,Santino Surfers - Morning Lights.mp3`

- `Audio` 组件支持 HTML5 audio 标签的 muted 和 autoplay 属性；
- `Audio` 组件的 volume 属性的取值范围是 0～100，与 audio 标签的取值范围 0～1 有所差别。

### 配置音频源
向 `Audio` 组件的 source 属性传入一个 url，即可直接展示和播放音频（如“基本用法”部分展示）

【多音频、音频列表将在下一版本更新】

### 配置音频组件右侧的按钮
向 `Audio` 组件的 buttons 属性传入一个数组，即可配置右侧显示的按钮。

默认情况下，只显示一个全屏按钮，配置数组为：
```javascript
[]
```

你也可以传入对象来自定义按钮和回调函数用以个性化的配置。对象中的 key 见 `<audio.buttons>` Props 表。

其中，`image` 和 `icon` 至少要传一个，`image` 的优先级更高。

:::preview
demo-preview=../demos/audio/buttons.vue
:::

音乐：`彭寒 - 3：7（识别数字）.mp3`

### mini 播放器
向 `Audio` 标签传入 `mini` 属性，即可设置为 mini 播放器。

当 `Audio` 是 mini 播放器时，仅显示播放/暂停按钮、当前播放时间和总时间。不显示进度条、音量控制按钮等，适用于音频预览场景。

:::preview
demo-preview=../demos/audio/mini.vue
:::

# API

### `<audio>` Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| source | 音频地址 | String, Array(String), Array(Object) | - | - | Array(Object) 见 `<audio.source>` 表 |
| muted | 静音 | Boolean | - | false | - |
| autoplay | 自动播放 | Boolean | - | false | - |
| buttons | 配置音频按钮 | Array(String || Object) | - | [] | Array(String || Object) 见 `<audio.buttons>` 表 |
| volume | 音量 | Number | 0～100 | 100 | - |

<!-- ### `<audio.source>` Props（未上线）
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| name | 音频名称 | String | - | - | - |
| poster | 音频封面 | String | - | - | - |
| url | 音频地址 | String | - | - | - |
| summary | 音频简介/摘要 | String | - | - | - |
| cc | cc 字幕 | String | - | - | - | -->

### `<audio.buttons>` Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| name | 按钮名称 | String | - | - | - |
| image | 按钮图片 | String, Vue Component | - | - | 与 icon 必选一个，具有高优先级 |
| icon | 按钮图标 | String | - | - | 与 image 必选一个，使用 Icon Apron 的 name |
| callback | 回调函数 | Function | - | - | - |