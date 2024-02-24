---
title: 链接 Link - 组件
editLink: true
---

<ap-breadcrumb>
  <ap-breadcrumb-item>组件</ap-breadcrumb-item>
  <ap-breadcrumb-item>通用</ap-breadcrumb-item>
</ap-breadcrumb>

# 链接 Link
> 按钮用于点击以后打开一个新的页面（无论是在当前窗口或新窗口），对应 HTML 的 a 标签。

## 基本用法
:::preview
demo-preview=../demos/link/basic-usage.vue
:::

### 下划线
默认链接没有下划线，如果需要任何时候都显示下划线，则给组件加上 `underlined` 属性，如果只在 hover 时显示下划线，则加上 `hover-underlined` 属性。

其中，`underlined` 的优先级更高

:::preview
demo-preview=../demos/link/underlined.vue
:::

### 加载中（未开放）
只要给组件加上 `loading` 属性即可展示加载中状态。


### 禁用
添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

:::preview
demo-preview=../demos/link/disabled.vue
:::

## Api
### `<link>` Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| href | 链接地址 | String | - | - | - |
| target | 链接打开目标 | String | _self/_blank/_top | _self | 对应 HTML a 标签的 target 属性 |
| hover-underlined | 是否在 hover 时显示下划线 | Boolean | - | false | 默认为无下划线 |
| underlined | 是否始终显示下划线 | Boolean | - | false | 高优先级 |
| loading | 是否为加载中链接 | Boolean | - | false | 暂未开放 |
| disabled | 是否为禁用链接 | Boolean | - | false | - |

### `<link>` Events

| 事件名 | 说明 | 参数 |
| :----- | :----- | :----- |
| click | 点击时触发 | ev: **MouseEvent** |