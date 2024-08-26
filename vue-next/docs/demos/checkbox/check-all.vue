<script setup>
import { ref, watch } from 'vue'
const checkAll = ref(false)
const indeterminate = ref(false)
const checkboxes = ref([false, false, false])

const checkAllToggle = () => {
  let arr = checkboxes.value
  const next = checkAll.value
  for(let i = 0; i < arr.length; i ++) {
    arr[i] = next
  }
  checkboxes.value = arr
}
watch(checkboxes, (newObj) => {
  let checkedCount = 0
  newObj.map(e => {
    if (e) {
      checkedCount += 1
    }
  })
  indeterminate.value = checkedCount > 0
  checkAll.value = checkedCount === newObj.length
}, { deep: true })
</script>

<template>
  <ap-space>
    <ap-checkbox v-model="checkAll" :indeterminate="indeterminate" @click="checkAllToggle">全选</ap-checkbox>
  </ap-space>
  <ap-space style="margin-top: 20px">
    <ap-checkbox v-model="checkboxes[0]">选项 1</ap-checkbox>
    <ap-checkbox v-model="checkboxes[1]">选项 2</ap-checkbox>
    <ap-checkbox v-model="checkboxes[2]">选项 3</ap-checkbox>
  </ap-space>
</template>