<template>
  <ap-spin loading content="正在读取数据">
    <ap-empty description="什么也没有找到" :bordered="false">
      <div class="container"></div>
    </ap-empty>
  </ap-spin>
</template>

<style lang="less" scoped>
  .container {
    height: 200px;
  }
</style>