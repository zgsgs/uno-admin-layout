import { defineConfig, loadEnv } from 'vite'
import { setupVitePlugins, usePath } from './build'

export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, `.env.${configEnv.mode}`)
  const { root, src } = usePath()

  const isVercel = viteEnv.VITE_IS_VERCEL === '1'

  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '~': root,
        '@': src,
      },
    },
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
