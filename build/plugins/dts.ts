import dts from 'vite-plugin-dts'

export default dts({
  include: ['../../../src/index.ts', '../../../src/index.vue'],
  beforeWriteFile(filePath, content) {
    return {
      filePath: filePath.replace('/dist/src/', '/dist/'),
      content,
    }
  },
})
