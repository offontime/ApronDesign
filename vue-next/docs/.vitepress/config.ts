import { defineConfigWithTheme } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'


// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  title: "Apron Design for Vue3",
  description: "A Vue3.x UI Component Library",
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
    lineNumbers: false,
    theme: 'light-plus', // https://shiki.style/themes#special-themes
    languages: ['html', 'css', 'js', 'ts', 'less', 'vue', 'bash', 'go']
  }
})
