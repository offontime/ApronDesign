<script setup>
import { ref } from 'vue'
const input = ref('')
</script>

<template>
  <div>
    <ap-input v-model="input" placeholder="请输入内容" disabled />
  </div>
</template>