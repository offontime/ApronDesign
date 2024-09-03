<script setup>
import { ref } from 'vue'
const prependInput = ref('13901234567')
const appendInput = ref('145')
</script>

<template>
  <div>
    <ap-input v-model="prependInput" prepend="+86" placeholder="请输入手机号码" />
  </div>
  <div style="margin-top: 20px;">
    <ap-input v-model="appendInput" append="元" placeholder="请输入金额" />
  </div>
</template>