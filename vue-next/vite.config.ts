import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'package/index.ts', // 入口文件路径
      name: '@apron.design/vue-next', // 库的名称
      fileName: (format) => `@apron.design/vue-next.${format}.js`,
    },
    outDir: 'lib', // 输出目录
  },
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./example', import.meta.url)),
      '~': fileURLToPath(new URL('./package', import.meta.url))
    }
  }
})
