<script setup>
import { ref } from 'vue'
const checkboxStd = ref(true)

const checkboxToggle = () => {
  checkboxStd.value = !checkboxStd.value
}
</script>

<template>
  <ap-space>
    <ap-checkbox v-model="checkboxStd">v-model</ap-checkbox>
  </ap-space>
  <div style="margin-top: 20px;">
    <ap-button @click="checkboxToggle">切换为：{{ checkboxStd ? '未选中' : '选中' }}</ap-button>
  </div>
</template>