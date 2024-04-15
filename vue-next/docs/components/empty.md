---
title: 空 Empty - 组件
editLink: true
---

<ap-breadcrumb>
  <ap-breadcrumb-item>组件</ap-breadcrumb-item>
  <ap-breadcrumb-item>数据展示</ap-breadcrumb-item>
</ap-breadcrumb>

# 空 Empty
> 表示一个空的区域，或者表示这个区域没有数据。

空 `<empty>` 组件默认占有父组件容器 100% 高度。

## 基本用法
:::preview
demo-preview=../demos/empty/basic-usage.vue
:::

## 更换图标
给组件添加 `icon` 属性，属性的值使用 `IconApron` 的 `name` 值。

:::preview
demo-preview=../demos/empty/icon.vue
:::

## 自定义提示文字
给组件添加 `description` 属性，属性值为字符串。

:::preview
demo-preview=../demos/empty/description.vue
:::

## Api
### `<empty>` Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| icon | 自定义图标 | String | `IconApron` 的 `name` | empty |  |
| description | 自定义提示文字 | String | - | '暂无数据' | |