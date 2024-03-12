---
title: 图标 Icon - 组件
editLink: true
---

<ap-breadcrumb>
  <ap-breadcrumb-item>组件</ap-breadcrumb-item>
  <ap-breadcrumb-item>通用</ap-breadcrumb-item>
</ap-breadcrumb>

<script setup>
  import IconList from '../page-components/icon-list.vue'
</script>


# 图标 Icon
> 在页面上展示图标。

`IconApron` 是 Apron Design 的分支组件包（当前版本为：2.3.1），拥有独立设计并整理的图标库。

使用图标组件，你需要额外安装 `@icon-apron/vue-next` 组件包。


```bash
# npm
npm install @icon-apron/vue-next --save-dev

# yarn
yarn add -D @icon-apron/vue-next

# pnpm
pnpm install @icon-apron/vue-next --save-dev
```

## 基本用法
在 `2.0.0-develop` 版本（包含）及以前的各个版本，你都需要全部引用：
```typescript
// main.ts
import IconApron from '@icon-apron/vue-next'
app.use(IconApron)
```

当使用全部引用时，图标以文字的形式展现在容器里，因此你可以对其设置字号、颜色等。

:::preview
demo-preview=../demos/icon/basic-usage.vue
:::

## 图标列表
图标将会逐步更新。
<IconList />

## API
### `<icon>` Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| name | 图标名称 | String | - | apron-design | - |
| size | 图标尺寸 | Number | - | 16 | - |
| color | 图标颜色 | String | - | #000000 | 使用 HEX、RGB 等 |