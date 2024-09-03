<script setup>
import { ref } from 'vue'
const pass = ref('')
</script>

<template>
  <div>
    <ap-input v-model="pass" type="password" placeholder="请输入密码" />
  </div>
</template>