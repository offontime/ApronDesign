<script setup>
const data = [
{ backImgUrl: 'https://cdn.offontime.com/images/p01.jpg' },
{ backImgUrl: 'https://cdn.offontime.com/images/p03.jpg' },
{ backImgUrl: 'https://cdn.offontime.com/images/840882c28dc383c4ceb9d90ed3b47aed.JPG' }
]
</script>
<template>
  <div class="container">
    <ap-carousel :data="data" />
  </div>
</template>

<style lang="less" scoped>
.container {
  height: 300px;
}
</style>