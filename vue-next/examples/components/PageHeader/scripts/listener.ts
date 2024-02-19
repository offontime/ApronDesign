import { ref } from 'vue'

// 监听页面页面位置
export function listener (isBackgroundedHeader: boolean) {
  const viewBackgroundedHeader = ref(false)
  if (isBackgroundedHeader) {
    viewBackgroundedHeader.value = true
  } else {
    // 获得当前位置，不在顶部时候给 true
    document.addEventListener('scroll', () => {
      const top = window.scrollY
      viewBackgroundedHeader.value = top > 100
    })
  }

  return { viewBackgroundedHeader }
}
