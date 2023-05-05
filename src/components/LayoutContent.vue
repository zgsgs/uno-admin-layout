<script setup lang="ts">
import { computed } from 'vue-demi'
import { CssRender } from 'css-render'

const props = withDefaults(defineProps<Props>(), {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  transitionDuration: 300,
  transitionTimingFunction: 'ease-in-out',
})

defineOptions({ name: 'LayoutContent' })

interface Props {
  /** 顶部内边距 */
  paddingTop?: number
  /** 底部内边距 */
  paddingBottom?: number
  /** 左侧内边距 */
  paddingLeft?: number
  /** 是否禁止溢出 */
  overflowHidden?: boolean
  /** 动画过渡时间 */
  transitionDuration?: number
  /** 动画过渡时间 */
  transitionTimingFunction?: string
}

const style = computed(() => {
  const { paddingTop, paddingBottom, paddingLeft, transitionDuration, transitionTimingFunction } = props
  const overflowStyle = `overflow:${props.overflowHidden ? 'hidden' : 'visible'};`
  return `padding-top:${paddingTop}px;padding-bottom:${paddingBottom}px;padding-left:${paddingLeft}px;${overflowStyle}transition-duration:${transitionDuration}ms;transition-timing-function:${transitionTimingFunction};`
})

// css
const { c } = CssRender()
const cStyle = c('.admin-layout__content', {
  flexGrow: 1,
  boxSizing: 'border-box',
  width: '100%',
  transitionProperty: 'padding-left',
})
cStyle.render()
cStyle.mount()
</script>

<template>
  <main :style="style" class="admin-layout__content">
    <slot />
  </main>
</template>
