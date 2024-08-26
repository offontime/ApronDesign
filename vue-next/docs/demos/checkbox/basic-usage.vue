<script setup>
import { ref } from 'vue'
const checkbox = ref(false)
</script>
<template>
  <ap-checkbox v-model="checkbox">选中</ap-checkbox>
</template>