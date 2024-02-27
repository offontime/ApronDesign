---
title: 二维码 QRcode - 组件
editLink: true
---

<ap-breadcrumb>
  <ap-breadcrumb-item>组件</ap-breadcrumb-item>
  <ap-breadcrumb-item>数据展示</ap-breadcrumb-item>
</ap-breadcrumb>

# 二维码 QRcode
> 生产并展示一个 qrcode 编码的二维码

`CodeApron` 是 Apron Design 的分支组件包（当前版本为：1.0.4），包含并后续开发常见的条形码、QR 码等二维码。

使用二维码组件，你需要额外安装 `@code-apron/vue-next` 组件包。

```bash
# npm
npm install @code-apron/vue-next --save-dev

# yarn
yarn add -D @code-apron/vue-next

# pnpm
pnpm install @code-apron/vue-next --save-dev
```

## 基本用法
你需要在你的代码中单独按需引用此包（如果你同时需要使用 `CodeApron` 的多种码，则可以全部引用（在 1.0.5 之后的版本中），并使用 `<ap-qr-code />` 标签。但我们不建议这样使用）。
```typescript
// 全部引用（在 1.0.5 版之后，不建议这样使用）
import CodeApron from '@code-apron/vue-next'
app.use(CodeApron)
```
:::preview
demo-preview=../demos/qrcode/basic-usage.vue
:::

### 尺寸
二维码默认尺寸根据 QR 码需要展示的内容进行自动设置，你也可以手动指定 QR 码的尺寸，给组件配置 `size` 属性，数字类型，单位是 px。
:::preview
demo-preview=../demos/qrcode/size.vue
:::

### 外边距
二维码默认外边距指的是二维码本体外有多少白边，默认根据 QR 码需要展示的内容进行自动设置。你也可以手动指定边距，给组件配置 `margin` 属性，单位是 x 倍单个像素点。
:::preview
demo-preview=../demos/qrcode/margin.vue
:::

### 颜色
你可以自定义二维码的颜色和背景的颜色。

你可以通过 `color` 属性配置码颜色，通过 `background-color` 属性配置背景色。也就是说，如果你喜欢，可以通过这个方法配置一个反色二维码
:::preview
demo-preview=../demos/qrcode/color.vue
:::

## API
### `<qr-code>` Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| text | 生成二维码的内容 | String | - | Apron Design QrCode | - |
| size | 二维码尺寸 | Number | - | 根据内容量自动判断 | 传入数字（单位为 px） |
| margin | 外边距 | Number | - | 自动 | 二维码实体外边距，值为一个像素点的倍数 |
| color | 二维码颜色 | String | - | 主要颜色 | 主要颜色为 `#393939` |
| background-color | 背景颜色 | String | - | 背景色 | 背景色为 `#FFFFFF` |
