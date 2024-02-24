---
title: 快速上手 - 开发指南
editLink: true
---

<ap-breadcrumb>
  <ap-breadcrumb-item>开发指南</ap-breadcrumb-item>
</ap-breadcrumb>

# 快速上手

> 跟随以下步骤，在项目中快速安装并使用 Apron Design


## Vue 版本
vue >= 3.2.0

**温馨提示：** Apron Design 不支持 IE 浏览器。

IE 浏览器逐步被各种现代浏览器所取代，并且 `Vue3` 也不再支持 IE 浏览器。由于用户基数太小，因此我们放弃了 IE 浏览器用户。

## 安装
```bash
# npm
npm install --save-dev @apron-design/vue-next

# yarn
yarn add @apron-design/vue-next -D

# pnpm
pnpm add @apron-design/vue-next -D
```

## 完整引用
```javascript
import { createApp } from 'vue'
import ApronDesign from '@apron-design/vue-next'
import App from './App.vue'

const app = createApp(App)
app.use(ApronDesign)
app.mount('#app')
```

## 浏览器兼容性
| Edge | Firefox | Chrome | Safari | Opera |
| :----- | :----- | :----- | :----- | :----- |
| ≥ 79 | ≥  78 | ≥ 64 | ≥ 12 | ≥ 53 不能完美支持 |