---
title: 圆按钮 CircleButton - 组件
editLink: true
---

<ap-breadcrumb>
  <ap-breadcrumb-item>组件</ap-breadcrumb-item>
  <ap-breadcrumb-item>通用</ap-breadcrumb-item>
</ap-breadcrumb>


# 圆按钮 CircleButton
> 圆按钮一般用在 **移动端** 上，当出现“一键登录” 场景时使用。也不代表圆按钮完全不能使用在 PC 端网页上。

## 基本用法
:::preview
demo-preview=../demos/circle-button/basic-usage.vue
:::

通常来讲，不会把多个圆形按钮设计在同一个界面里。因此原按钮不使用 type 作为样式区分：

### 样式区分
给按钮配置 `isPrimary` 属性，按钮为主要按钮，配置 `isMain` 属性，按钮为次级主要按钮。
:::preview
demo-preview=../demos/circle-button/color.vue
:::

### 禁用按钮
给按钮配置 `disabled` 属性，可以禁用按钮。
:::preview
demo-preview=../demos/circle-button/disabled.vue
:::

### 危险按钮
给按钮配置 `danger` 属性，可以将按钮设置为危险按钮。
:::preview
demo-preview=../demos/circle-button/danger.vue
:::

## 主题
给按钮配置 `theme` 属性可以为按钮配置主题。
:::preview
demo-preview=../demos/circle-button/theme.vue
:::

## Api
### `<circle-button>` Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| isPrimary | 是否为主要按钮 | Boolean | - | false | - |
| isMain | 是否为次级主要按钮 | Boolean | - | false | - |
| danger | 是否为危险按钮 | Boolean | - | false | - |
| loading | 是否为加载中按钮 | Boolean | - | false | 暂未开放 |
| theme | 主题 | String | none/halo | none | 后期将会推出 ripple（涟漪） |
| disabled | 是否为禁用按钮 | Boolean | - | false | - |

### `<circle-button>` Events

| 事件名 | 说明 | 参数 |
| :----- | :----- | :----- |
| click | 点击时触发 | ev: **MouseEvent** |