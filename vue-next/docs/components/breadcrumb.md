---
title: 面包屑 Breadcrumb - 组件
editLink: true
---

<ap-breadcrumb>
  <ap-breadcrumb-item>组件</ap-breadcrumb-item>
  <ap-breadcrumb-item>导航</ap-breadcrumb-item>
</ap-breadcrumb>

# 面包屑 Breadcrumb
> 面包屑是辅助导航模式，用于识别页面在层次结构内的位置，并根据需要向上返回。

> [!TIP]
> 这个概念源自童话故事《汉赛尔和格莱特》，故事中的两个孩子为了在森林中迷路时找到回家的路，沿途撒下了面包屑作为标记。

## 基本用法
:::preview
demo-preview=../demos/breadcrumb/basic-usage.vue
:::

### 设置分隔符
可以使用 `separator` 属性或者插槽统一设置分隔符。也可以为 `BreadcrumbItem` 配置 `separator` 属性对某一块面包屑单独配置分隔符，优先级最高。
:::preview
demo-preview=../demos/breadcrumb/separator.vue
:::

### 链接
在每一个 `BreadcrumbItem` 上都可以分别设置链接和打开窗口（使用 Apron Design 的 Link 组件）
:::preview
demo-preview=../demos/breadcrumb/link.vue
:::

## API
### `<breadcrumb>` Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| separator | 分隔符文字 | String/Number | - | / | - |

### `<breadcrumb-item>` Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| separator | 分隔符文字 | String/Number | - | / | 具有较高的优先级 |
| href | 链接 | String(URL/URI) | - | - | 默认为空，表示不是链接 |
| target | 链接目标 | String | _self/_blank/_top ... | _self | 与 Link 组件一致（与 HTML a 标签一致），当 href 不为空时有效 |