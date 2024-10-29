<script setup>
const data = [
  { backImgUrl: 'https://cdn.offontime.com/images/p01.jpg' },
  { backImgUrl: 'https://cdn.offontime.com/images/p03.jpg' },
  { backImgUrl: 'https://cdn.offontime.com/images/840882c28dc383c4ceb9d90ed3b47aed.JPG' }
]
</script>
<template>
  <div class="container">
    <ap-carousel :data="data" autoplay effect="fade" />
  </div>
  <div class="container">
    <ap-carousel :data="data" autoplay effect="cube" />
  </div>
</template>

<style lang="less" scoped>
.container {
  height: 300px;
  margin-top: 20px;
  &:first-child {
    margin-top: 0;
  }
}
</style>
