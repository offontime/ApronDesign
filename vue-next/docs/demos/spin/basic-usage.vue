<template>
  <div style="height: 200px">
    <ap-spin :loading="loading">
      <div class="slot-contianer">被覆盖的页面</div>
    </ap-spin>
  </div>

  <ap-space>
    <span>加载开关：</span>
    <ap-switch size="small" v-model="loading"></ap-switch>
  </ap-space>
</template>

<script setup>
import { ref } from 'vue'
const loading = ref(true)
</script>

<style lang="less" scoped>
  .slot-container {
    height: 200px;
  }
</style>