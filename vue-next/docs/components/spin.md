---
title: 加载中 Spin - 组件
editLink: true
---

<ap-breadcrumb>
  <ap-breadcrumb-item>组件</ap-breadcrumb-item>
  <ap-breadcrumb-item>反馈</ap-breadcrumb-item>
</ap-breadcrumb>

# 加载中 Spin
> 当一个页面或页面的局部数据正在获取时使用加载中组件减少用户的焦虑。

## 基本用法
:::preview
demo-preview=../demos/spin/basic-usage.vue
:::

## 更换图标
给组件添加 `name` 属性，可选的值有：`cube`、`disk`、`dual-ring`、`mobius`、`pulse`、`rolling`、`spinner` 和 `spinning`。

:::preview
demo-preview=../demos/spin/icon.vue
:::

## 自定义提示文字
给组件添加 `content` 属性，属性值为字符串。

:::preview
demo-preview=../demos/spin/content.vue
:::

## 提示图标和文字的位置
提示图标共可以出现在 9 个不同的位置：分别是 左、中、右 和 上、中、下 的笛卡尔乘积。给组件添加 `position` 属性，可选值为 `left-top`、`center-top`、`right-top`、`leftcenter`、`center-center`、`right-center`、`left-bottom`、`center-bottom`、`right-bottom`。

值的注意的是，只有 `center-center` 的图标略大，并且为上下排列。其余的位置均为左右排列，图标和字一样大。

:::preview
demo-preview=../demos/spin/position.vue
:::

## Api
### `<empty>` Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| name | 自定义图标 | String | `cube`、`disk`、`dual-ring`、`mobius`、`pulse`、`rolling`、`spinner` 和 `spinning` | 'spinning' |  |
| content | 自定义提示文字 | String | - | '加载中...' | |
| position | 提示图标和文字位置 | String | `left-top`、`center-top`、`right-top`、`leftcenter`、`center-center`、`right-center`、`left-bottom`、`center-bottom`、`right-bottom` | 'center-center' | |