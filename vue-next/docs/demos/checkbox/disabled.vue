<script setup>
import { ref } from 'vue'
const checkbox1 = ref(false)
const checkbox2 = ref(true)
</script>

<template>
  <ap-space>
    <ap-checkbox v-model="checkbox1" disabled>checkbox</ap-checkbox>
    <ap-checkbox v-model="checkbox2" disabled>diabled checkbox</ap-checkbox>
  </ap-space>
</template>