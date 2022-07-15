import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import { configImageminPlugin } from './configImagePlugin'
import { configCDNPlugin } from './configCDNPlugin'
export function createVitePlugins(isBuild) {
  const vitePlugins = [vue()]
  // 按需加载
  vitePlugins.push(
    Components({
      resolvers: [VantResolver()]
    })
  )
  vitePlugins.push(configCDNPlugin())
  // 打包分析
  vitePlugins.push(visualizer({ open: true }))
  if (isBuild) {
    // rollup-plugin-vite-imagemin
    process.env.VITE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin())
    // rollup-plugin-gzip
    vitePlugins.push(viteCompression())
  }

  return vitePlugins
}
