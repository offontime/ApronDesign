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
      formats: ['es', 'umd'],
      fileName: format => `apron.design.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
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
