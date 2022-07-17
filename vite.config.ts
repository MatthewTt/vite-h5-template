import { defineConfig, loadEnv } from 'vite'
import { createVitePlugins } from './build/plugin'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const isBuild = command === 'build' // 是否是生产环境
  return defineConfig({
    define: {
      'process.env': loadEnv(mode, process.cwd())
    },
    esbuild: {
      pure: ['console.log', 'debugger']
    },
    plugins: createVitePlugins(isBuild),
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  })
}
