# 安装

## npm 安装

推荐使用 npm 方式安装，他能更好地配合 webpack 打包工具使用

```bash
npm install @apron.design/vue --save # Vue2.x 项目
npm install @apron.design/vue-next --save # Vue3.x 项目（未上线）
npm install @apron.design/react --save # React 项目（未上线）
```

## yarn 安装

```bash
yarn @apron.design/vue --save # Vue2.x 项目
yarn @apron.design/vue-next --save # Vue3.x 项目（未上线）
yarn @apron.design/react --save # React 项目（未上线）
```

## CDN
目前可以通过 [unpkg.com/@apron.design/vue](https://unpkg.com/@apron.design/vue) 获取到最新版本的资源，在页面上引用 js 和 css 文件即可开始使用

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/@apron.design/vue/lib/apron.design.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/@apron.design/vue/lib/apron.design.common.js"></script>
```

> 我们建议使用 CDN 引入 Apron Design 的用户在链接地址上锁定版本，以免将来 Apron Design 升级时受到非兼容性更新的影响。锁定版本的方法请查看 [unpkg.com](https://unpkg.com/)。