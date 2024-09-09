<script lang="ts" setup>
const callMmh = () => {
  window.open('http://music.mitkimi.com')
}
</script>

<template>
  <div class="container">
    <ap-audio
      source="https://cdn.offontime.com/mp3/%E5%BD%AD%E5%AF%92%20-%203%EF%BC%9A7%EF%BC%88%E8%AF%86%E5%88%AB%E6%95%B0%E5%AD%97%EF%BC%89.mp3"
      :buttons="[
        {
          name: '喜欢',
          icon: 'heart-full',
          callback: () => { console.log('like') }
        },
        {
          name: '黑米说音乐厅',
          image: 'https://music.mitkimi.com/favicon.png',
          callback: callMmh
        }
      ]"
    />
  </div>
</template>
<style lang="less" scoped>
.container {
  width: 100%;
}
</style>