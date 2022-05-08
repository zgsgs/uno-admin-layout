import AutoImport from 'unplugin-auto-import/vite'

// https://github.com/antfu/unplugin-auto-import
export default AutoImport({
  imports: [
    'vue-demi',
  ],
  dts: 'types/auto-imports.d.ts',
})
