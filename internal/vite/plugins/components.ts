import Components from 'unplugin-vue-components/vite'

// https://github.com/antfu/unplugin-vue-components
export default Components({
  // allow auto load markdown components under `./src/components/`
  extensions: ['vue', 'md'],
  // allow auto import and register components used in markdown
  include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
  dts: 'types/components.d.ts',
})
