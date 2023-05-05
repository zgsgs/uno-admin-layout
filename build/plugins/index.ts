import type { PluginOption } from 'vite'
import unocss from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import unplugin from './unplugin'
import dts from './dts'

/**
 * vite插件
 */
export function setupVitePlugins(): (PluginOption | PluginOption[])[] {
  const plugins = [
    vue(),
    unocss(),
    dts,
    ...unplugin,
  ]

  return plugins
}
