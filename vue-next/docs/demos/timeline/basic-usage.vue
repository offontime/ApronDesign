<template>
  <ap-timeline>
    <ap-timeline-item v-for="item,index in events" :key="index" :label="item.time">
      {{ item.headline }}
    </ap-timeline-item>
  </ap-timeline>
</template>

<script setup>
const events = [
  {
    time: '2023/04/11',
    headline: 'The first milestone'
  },
  {
    time: '2023/09/28',
    headline: 'The second milestone'
  },
  {
    time: '2024/01/21',
    headline: 'The third milestone'
  }
]
</script>