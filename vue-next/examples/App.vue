<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from './components/PageHeader/index.vue'
import PageFooter from './components/PageFooter/index.vue'
</script>

<template>
  <PageHeader />
  <RouterView />
  <PageFooter />
</template>

<style scoped>
</style>
