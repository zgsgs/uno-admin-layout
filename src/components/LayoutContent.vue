<script setup lang="ts">
import { computed } from 'vue-demi'
import { useCssRender } from '@/hooks'

interface Props {
  /** 顶部内边距 */
  paddingTop?: number
  /** 底部内边距 */
  paddingBottom?: number
  /** 左侧内边距 */
  paddingLeft?: number
  /** 动画过渡时间 */
  transitionDuration?: number
  /** 动画过渡时间 */
  transitionTimingFunction?: string
}

const props = withDefaults(defineProps<Props>(), {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  transitionDuration: 300,
  transitionTimingFunction: 'ease-in-out',
})

const { cssRender } = useCssRender()

const style = computed(() => {
  const { paddingTop, paddingBottom, paddingLeft, transitionDuration, transitionTimingFunction } = props
  return `padding-top: ${paddingTop}px;padding-bottom: ${paddingBottom}px;padding-left: ${paddingLeft}px;transition-duration: ${transitionDuration}ms;transition-timing-function: ${transitionTimingFunction};`
})

// css
cssRender('.uno-admin-layout__main', {
  flexGrow: 1,
  boxSizing: 'border-box',
  width: '100%',
  transitionProperty: 'padding-left',
})
</script>

<template>
  <main :style="style" class="uno-admin-layout__main">
    <slot />
  </main>
</template>
