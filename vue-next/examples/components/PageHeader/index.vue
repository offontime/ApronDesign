<template src="./PageHeader.html"></template>
<script>
import { listener } from './scripts/listener'

export default {
  props: {
    isBackgroundedHeader: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    return {
      ...listener(props.isBackgroundedHeader)
    }
  }
}
</script>
<style src="./PageHeader.less" lang="less" scoped></style>
