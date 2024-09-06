<script lang="ts" setup>
import { ref } from 'vue'
const buttonOptions = ref([
  {
    name: '点赞',
    icon: 'heart-full',
    callback: () => {
      console.log('点赞逻辑')
    }
  },
  {
    name: '黑米说音乐厅',
    image: 'https://music.mitkimi.com/favicon.png',
    callback: () => {
      window.open('https://music.mitkimi.com')
    }
  },
  'fullscreen'
])
</script>

<template>
  <div class="container">
    <ap-video
      source="https://cdn.offontime.com/video/home.m4v"
      :buttons="buttonOptions"
    />
  </div>
</template>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 530px;
}
</style>