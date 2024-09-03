<script setup>
import { ref } from 'vue'
const pass = ref('88888888')
</script>

<template>
  <div>
    <ap-input v-model="pass" type="password" placeholder="请输入密码" allow-clear />
  </div>
</template>