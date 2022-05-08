import type { PluginOption } from 'vite'
import autoImport from './auto-import'
import components from './components'
import unocss from './unocss'
import dts from './dts'
import vue from './vue'

/**
 * vite插件
 */
export function setupVitePlugins(): (PluginOption | PluginOption[])[] {
  const plugins = [
    autoImport,
    components,
    unocss,
    dts,
    vue,
  ]

  return plugins
}
