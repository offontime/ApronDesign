<template>
  <div class="apron-collapse-container">
    <div :class="[
      'apron-collapse-item',
      isActiveArray.indexOf(index) >= 0 ? 'apron-collapse-item-active' : ''
    ]" v-for="item,index in data" :key="`apron-item-${index}`">
      <div class="apron-collapse-item-title">
        <div
          class="apron-collapse-indicator"
          @click="handleCollapseClick(index)"
          >
          <ap-icon name="right" :size="12" />
        </div>
        <div class="apron-collapse-title">{{ item.name }}</div>
      </div>
      <div class="apron-collapse-item-content">
        <div class="content" v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { collapseEmits, collapseProps } from './collapse'

defineOptions({
  name: 'ApCollapse',
})
const props = defineProps(collapseProps)
const emit = defineEmits(collapseEmits)

const isActiveArray = ref([0])

function handleCollapseClick(index: Number) {
  const indexExists = isActiveArray.value.includes(index);
  if (indexExists) {
    // 如果包含，就去掉这个index
    isActiveArray.value = isActiveArray.value.filter((element) => element!== index);
  } else {
    // 如果不包含，就添加这个index
    isActiveArray.value = [...isActiveArray.value, index];
  }
}
</script>

<style src="./collapse.less" lang="less" scoped></style>