let baseSize = 16

// 设置 rem 函数
function setRem () {
  const clientWidth = document.documentElement.clientWidth
  const clientHeight = document.documentElement.clientHeight
  // Vue.prototype.clientWidth = clientWidth
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  // const baseWdith = clientWidth > 1024 ? 1200
  //   : clientWidth >= 768 ? 768 : 375

  let baseWidth = 375
  if (clientWidth < 768) {
    baseWidth = 375
  } else if (clientWidth >= 768 && clientWidth < 1024) {
    baseWidth = 768
  } else {
    baseSize = clientWidth / clientHeight > 2 ? 13.5 : 16
    baseWidth = 1200
  }
  const scale = document.documentElement.clientWidth / baseWidth
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}

// 初始化
setRem()

// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
