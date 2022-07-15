import { defineConfig, loadEnv } from 'vite'

import { createVitePlugins } from './build/plugin/index'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const isBuild = command === 'build' // 是否是生产环境
  console.log(command, 'mode')
  return defineConfig({
    define: {
      'process.env': loadEnv(mode, process.cwd())
    },
    esbuild: {
      pure: ['console.log', 'debugger']
    },
    build: {
      target: 'es2015',
      chunkSizeWarningLimit: 2000,
      // minify: 'terser',
      cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      /*terserOptions: {
        compress: {
          // warnings: false,
          drop_console: true, //打包时删除console
          drop_debugger: true, //打包时删除 debugger
          pure_funcs: ['console.log']
        },
        output: {
          // 去掉注释内容
          comments: true
        }
      },*/
      rollupOptions: {
        output: {
          manualChunks: {
            // 拆分代码，这个就是分包，配置完后自动按需加载，现在还比不上webpack的splitchunk，不过也能用了。
            vue: ['vue', 'vue-router'],
            vant: ['vant'],
            vconsole: ['vconsole']
            // echarts: ['echarts']
          }
        }
      },
      brotliSize: false
    },
    plugins: createVitePlugins(isBuild),
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  })
}
