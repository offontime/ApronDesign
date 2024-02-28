// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import ApronDesign from '../../../package/index'
import IconApron from '@icon-apron/vue-next'
import './assets/main.css'
import './style.less'
import './markdown.less'
import '@icon-apron/vue-next/lib/style.css'
export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
    app.use(ApronDesign)
    app.use(IconApron)
    app.component('demo-preview', ElementPlusContainer)
  }
} satisfies Theme

