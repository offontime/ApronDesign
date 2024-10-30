<script setup>
const data = [
  {
    name: '我是一行文字',
    content: `<p>我也是一行文字</p>
    <p>我是第二行文字</p>
    <p>我是第三行文字</p>
    <p>我是第四行文字</p>
    <p>我是第五行文字</p>
    <p>我是第六行文字</p>`
  },
  {
    name: 'Apron Design',
    content: '<p>我也是一行文字</p></p>我是第二行文字</p>'
  }
]
</script>

<template>
  <div class="collapse-demo">
    <ap-collapse :data="data" accordion />
  </div>
</template>