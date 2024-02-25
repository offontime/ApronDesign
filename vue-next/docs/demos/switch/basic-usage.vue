<template>
  <ap-space>
    <ap-switch v-model="val" />
    <span>开关状态：{{ val ? '开' : '关' }}</span>
  </ap-space>
</template>

<script setup>
import { ref } from 'vue'
const val = ref(false)
</script>