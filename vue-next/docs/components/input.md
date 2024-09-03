---
title: 输入框 Input - 组件
editLink: true
---

<ap-breadcrumb>
  <ap-breadcrumb-item>组件</ap-breadcrumb-item>
  <ap-breadcrumb-item>表单</ap-breadcrumb-item>
</ap-breadcrumb>

# 输入框 Input
> 基本的表单组件，并在原生空间基础上进行了功能扩展，可以组合使用。


## 基本用法
:::preview
demo-preview=../demos/input/basic-usage.vue
:::

### 输入框类型
支持 HTML input 的 type 属性。当使用 `password` 时，会出现眼睛图标。
:::preview
demo-preview=../demos/input/type.vue
:::

### 前后标签
使用 `prepend` 和 `append` 属性给输入框增加标签
:::preview
demo-preview=../demos/input/pends.vue
:::

### 允许清空
使用 `allow-clear` 属性显示清空按钮
:::preview
demo-preview=../demos/input/clear.vue
:::

### 禁用输入框
使用 `disabled` 属性禁用输入框
:::preview
demo-preview=../demos/input/disabled.vue
:::

## 搜索框
:::preview
demo-preview=../demos/input/search.vue
:::


## Api
### `<input>` Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| v-model | 绑定值 | String | - | - | - |
| type | 类型 | String | text/password/... | text | 使用 HTML input type 属性 |
| placeholder | 提示文字 | String | - | - | - |
| search | 搜索模式 | Object | - | - | 以 input-search props 表格为准 |
| allow-clear | 是否允许清空 | Boolean | - | false | - |
| disabled | 是否为禁用 | Boolean | - | false | - |

### `<input-search>` Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| useIcon | 是否显示图标 | Boolean | - | false | - |
| iconName | 图标名称 | String | IconApron 图标 | search | useIcon 为 true 时生效 |
| searchText | 显示文字 | String | - | - | - |

### `<input>` Events
| 事件名 | 说明 | 参数 |
| :----- | :----- | :----- |
| focus | 激活时触发 | ev: **FocusEvent** |
| blur | 失去焦点时触发 | ev: **FocusEvent** |
| change | 内容改变时触发 | ev: **Event** |
| clear | 清除内容时触发 | ev: **PointerEvent** |
| enter | 按回车键时触发 | ev: **KeyboardEvent** |
| search | 搜索时触发 | ev: **MouseEvent** |