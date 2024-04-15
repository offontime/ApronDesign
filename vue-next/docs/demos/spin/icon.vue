<template>
  <ap-space>
    <div class="icon-block" v-for="item in arr" :key="`icon-block-${item}`">
      <ap-spin :name="item" :loading="true">
        <div>{{ item }}</div>
      </ap-spin>
    </div>
  </ap-space>
</template>

<script setup>
  const arr = ['cube', 'disk', 'dual-ring', 'mobius', 'pulse', 'rolling', 'spinner', 'spinning']
</script>

<style lang="less" scoped>
  .icon-block {
    width: 150px;
    height: 150px;
  }
</style>