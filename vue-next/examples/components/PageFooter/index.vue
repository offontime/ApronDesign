<template src="./PageFooter.html"></template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    const year = ref(new Date().getFullYear())
    return {
      year
    }
  }
}
</script>
<style src="./PageFooter.less" lang="less" scoped></style>
