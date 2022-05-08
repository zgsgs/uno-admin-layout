import { defineConfig, loadEnv } from 'vite'
import { resolvePath, setupVitePlugins, viteDefine } from './internal/vite'

export default defineConfig((configEnv) => {
  // const viteEnv = loadEnv(configEnv.mode, process.cwd())
  const viteEnv = loadEnv(configEnv.mode, `.env.${configEnv.mode}`)
  const vitePath = resolvePath('./', import.meta.url)

  const isVercel = viteEnv.VITE_IS_VERCEL === '1'

  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '~': vitePath.root,
        '@': vitePath.src,
      },
    },
    define: viteDefine,
    plugins: setupVitePlugins(),
    optimizeDeps: {
      exclude: ['vue-demi'],
    },
    build: isVercel
      ? {
          brotliSize: false,
        }
      : {
          lib: {
            entry: './src/index.ts',
            name: 'UnonuAdminLayout',
            fileName: 'index',
          },
          rollupOptions: {
            external: ['vue'],
            output: {
              globals: {
                vue: 'Vue',
              },
            },
          },
        },
  }
})
