<script setup lang="ts">
import { computed } from 'vue-demi'
import { CssRender } from 'css-render'

const props = withDefaults(defineProps<Props>(), {
  zIndex: 1002,
  collapse: false,
  width: 200,
  paddingTop: 0,
  transitionDuration: 300,
  transitionTimingFunction: 'ease-in-out',
})

defineOptions({ name: 'LayoutSider' })

interface Props {
  /** fixed布局的层级 */
  zIndex?: number
  /** 宽度 */
  width?: number
  /** 顶部内边距 */
  paddingTop?: number
  /** 动画过渡时间 */
  transitionDuration?: number
  /** 动画过渡时间 */
  transitionTimingFunction?: string
}

const style = computed(() => {
  const { zIndex, width, paddingTop, transitionDuration, transitionTimingFunction } = props
  return `z-index:${zIndex};width:${width}px;padding-top:${paddingTop}px;transition-duration:${transitionDuration}ms;transition-timing-function:${transitionTimingFunction};`
})

// css
const { c } = CssRender()
const cStyle = c('.admin-layout__sider', {
  position: 'fixed',
  left: 0,
  top: 0,
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  transitionProperty: 'all',
})
cStyle.render()
cStyle.mount()
</script>

<template>
  <aside class="admin-layout__sider" :style="style">
    <slot />
  </aside>
</template>
