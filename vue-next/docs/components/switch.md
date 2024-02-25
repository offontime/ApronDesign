---
title: 开关 Switch - 组件
editLink: true
---

<ap-breadcrumb>
  <ap-breadcrumb-item>组件</ap-breadcrumb-item>
  <ap-breadcrumb-item>表单</ap-breadcrumb-item>
</ap-breadcrumb>

# 开关 Switch
> 面互斥性的操作控件，用户可打开或关闭某个功能。一般用于只有真/假两种值的情况。


## 基本用法
:::preview
demo-preview=../demos/switch/basic-usage.vue
:::

### 尺寸
开关提供了标准尺寸 `standard` 和小尺寸 `small` 两种尺寸供使用。给组件配置 `size` 属性已设置尺寸。
:::preview
demo-preview=../demos/switch/size.vue
:::

### 开关颜色
可以给开关配置 `isPrimary` 属性已获得和主要按钮一致的打开颜色，这个配置具有较高的优先级。

如果你想自定义开关打开时的颜色，给组件配置 `checked-color` 属性，关闭时的颜色属性是 `unchecked-color`
:::preview
demo-preview=../demos/switch/color.vue
:::

## API
### `<switch>` Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| size | 开关尺寸 | String | standard/small | standard | - |
| isPrimary | 使用主要按钮颜色 | Boolean | - | false | - |
| checked-color | 配置开关打开时的颜色 | String | - | 次级主要颜色 | 优先级低于 isPrimary |
| unchecked-color | 配置开关关闭时的颜色 | String | - | 背景色 | 不受 isPrimary 属性影响 |

### `<switch>` Events

| 事件名 | 说明 | 参数 |
| :----- | :----- | :----- |
| click | 点击时触发 | ev: **MouseEvent** |