---
title: 复选 Checkbox - 组件
editLink: true
---

<ap-breadcrumb>
  <ap-breadcrumb-item>组件</ap-breadcrumb-item>
  <ap-breadcrumb-item>表单</ap-breadcrumb-item>
</ap-breadcrumb>

# 复选 Checkbox
> 在一组数据中，用户可以根据情况来选择一个或一组数据。


## 基本用法
:::preview
demo-preview=../demos/checkbox/basic-usage.vue
:::

### 数据绑定
可以使用 `v-model` 属性对组件数据进行绑定。
:::preview
demo-preview=../demos/checkbox/controls.vue
:::

## 禁用状态
给组件配置 `disabled` 属性可以禁用组件。
:::preview
demo-preview=../demos/checkbox/disabled.vue
:::

## 全选
给组件配置 `indeterminate` 属性表示部分选中。
:::preview
demo-preview=../demos/checkbox/check-all.vue
:::

## API
### `<checkbox>` Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| v-model | 绑定选中值 | Boolean | - | false | - |
| disabled | 禁用 | Boolean | - | false | - |
| indeterminate | 部分选中 | Boolean | - | false | 设置为部分选中，选中有更高的优先级 |
