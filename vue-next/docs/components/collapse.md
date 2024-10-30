---
title: 折叠面板 Collapse - 组件
editLink: true
---

<ap-breadcrumb>
  <ap-breadcrumb-item>组件</ap-breadcrumb-item>
  <ap-breadcrumb-item>数据展示</ap-breadcrumb-item>
</ap-breadcrumb>

# 折叠面板 Collapse
> 可以折叠 / 展开的内容区域。

## 基本用法

:::preview
demo-preview=../demos/collapse/basic-usage.vue
:::

### 手风琴模式
给组件添加 `accordion` 属性可改变成手风琴模式：每次最多只显示一个展开。
:::preview
demo-preview=../demos/collapse/accordion.vue
:::


## Api
### `<CarouCollapsesel>` Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| data | 渲染数据 | Array[Object] | - | [] |  |
| accordion | 手风琴模式 | Boolean | - | false | |
| expand | 默认展开 | Array[Number] | - | [] | 填入展开的 index，从 0 开始 |
