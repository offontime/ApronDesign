---
title: 分割线 Divider - 组件
editLink: true
---

<ap-breadcrumb>
  <ap-breadcrumb-item>组件</ap-breadcrumb-item>
  <ap-breadcrumb-item>布局</ap-breadcrumb-item>
</ap-breadcrumb>

# 分割线 Divider
> 划分内容区域，对模块做分隔。

## 基本用法
适用于组件，也适用于任何 HTML 标签。

:::preview
demo-preview=../demos/divider/basic-usage.vue
:::

### 线型
给组件添加 `line-style` 属性改变分割线的线型，值为 css 的 `border-style` 属性所支持的值：`solid`、`dashed`、`dotted`、`double`，默认为 `solid`。
:::preview
demo-preview=../demos/divider/line-style.vue
:::

### 带有文字的分割线
给组件添加插槽，会自动为分割线添加文字。通过 `orientation` 属性为文字配置显示位置，默认为 center。
:::preview
demo-preview=../demos/divider/orientation.vue
:::

## Api
### `<divider>` Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| line-style | 线型 | String | solid/dashed/dotted/double | solid | 使用 css 的 `border-style` 属性支持的值 |
| orientation | 分割线文字显示位置 | String | left/center/right | center | 仅在有插槽的时候有效 

### `<divider>` Slots

| 插槽名 | 说明 | 参数 |
| :----- | :----- | :----- |
| default | 默认插槽 | 分割线上的文字提示 |