<template>
  <div
    :class="[
      'apron-carousel'
    ]"
  >
    <swiper
      :modules="modules"
      :pagination="{
        clickable: true
      }">
      <swiper-slide>1</swiper-slide>
      <swiper-slide>2</swiper-slide>
      <swiper-slide>3</swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { carouselEmits, carouselProps } from './carousel'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [
  Navigation,
  Pagination
]

defineOptions({
  name: 'ApCarousel',
})
const props = defineProps(carouselProps)
const emit = defineEmits(carouselEmits)

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>

<style src="./carousel.less" lang="less" scoped></style>