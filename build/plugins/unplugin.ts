import DefineOptions from 'unplugin-vue-define-options/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default [
  DefineOptions(),
  Components({
    extensions: ['vue', 'md'],
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    dts: 'types/components.d.ts',
  }),
  AutoImport({
    imports: [
      'vue-demi',
      'vue/macros',
    ],
    dts: 'types/auto-imports.d.ts',
  }),
]
