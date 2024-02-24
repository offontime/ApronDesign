---
title: 按钮 Button - 组件
editLink: true
---

<ap-breadcrumb>
  <ap-breadcrumb-item>组件</ap-breadcrumb-item>
  <ap-breadcrumb-item>通用</ap-breadcrumb-item>
</ap-breadcrumb>

# 按钮 Button
> 按钮用于开始一个即时操作。在标记了一组（或封装一组）操作命令时，相应用户的点击行为，触发相应的业务逻辑。

## 基本用法
:::preview
demo-preview=../demos/button/basic-usage.vue
:::

### 按钮类型
在 Apron Design 中，我们共有六种按钮类型：

- 主按钮 Primary Button：一个操作区域内的唯一主行动点；
- 次级主按钮 Main Button：用于没有主次之分、一个或一组行动点；
- 默认按钮 Default Button：用于没有主次之分、一个或一组行动点；
- 虚线按钮 Dashed Button：用于某些特定操作；
- 文本按钮 Text Button：用于最次级的行动点；
- 链接按钮 Link Button：一般用于链接（暂未开放）。

以及三种状态属性配合上面的使用
- 危险：删除、移动、修改权限等危险操作，一般需要二次确认；
- 禁用：行动点不可用时；
- 加载中：用于异步操作等待反馈时使用，也是禁用状态，可以避免多次提交。

:::preview
demo-preview=../demos/button/type.vue
:::

### 危险按钮
危险应该是一种属性，而不应该是一种类型。

:::preview
demo-preview=../demos/button/danger-button.vue
:::

### 尺寸
我们提供两种尺寸的按钮供使用，默认为 `standard`，还可以选择小按钮 `small`。

在默认情况下，标准尺寸按钮宽度是 140px，小按钮为 80px。当按钮内容无法容纳时，将会自动撑开宽度。

:::preview
demo-preview=../demos/button/size.vue
:::

### 占满整行
在一些表单场景需要使按钮占满整行（大多用于移动端）。

:::preview
demo-preview=../demos/button/fluid-button.vue
:::


### 加载中（未开放）
只要给组件加上 `loading` 属性即可展示加载中状态。


### 禁用
添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

:::preview
demo-preview=../demos/button/disabled.vue
:::

## Api
### `<button>` Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| type | 类型 | String | primary/default/dashed/text/link/(secondary) | default | - |
| danger | 是否为危险按钮 | Boolean | - | false | - |
| fluid | 是否为占满整行的按钮 | Boolean | - | false | - |
| loading | 是否为加载中按钮 | Boolean | - | false | 暂未开放 |
| disabled | 是否为禁用按钮 | Boolean | - | false | - |

### `<button>` Events

| 事件名 | 说明 | 参数 |
| :----- | :----- | :----- |
| click | 点击时触发 | ev: **MouseEvent** |