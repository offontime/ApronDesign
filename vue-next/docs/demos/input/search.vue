<script setup>
import { ref } from 'vue'
const keywords = ref()
</script>

<template>
  <div>
    <ap-input
      v-model="keywords"
      :search="{
        useIcon: true,
        iconName: 'search'
      }"
      placeholder="请输入搜索关键字" />
  </div>
  <div style="margin-top: 20px;">
    <ap-input
      v-model="keywords"
      :search="{
        useIcon: false,
        searchText: '搜索'
      }"
      placeholder="请输入搜索关键字" />
  </div>
</template>