<template>
  <div
    :class="[
      'apron-carousel',
      indicatorClass
    ]"
  >
    <swiper
      :modules="modules"
      :pagination="{
        clickable: true
      }"
      :loop="props.loop"
      :direction="props.direction"
      :speed="props.speed"
      :effect="props.effect"
      :autoplay="{ delay: props.delay, disableOnInteraction: true }"
      >
        <swiper-slide v-for="item, index in data" :key="`swiper-${index}`">
          <img class="full-cover-img" :src="item.backImgUrl" />
        </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Pagination, Autoplay,
  EffectFade, EffectCube, // effects
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { carouselEmits, carouselProps } from './carousel'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-cube'
const indicatorClass = ref('')
const modules: Array<any> = []

defineOptions({
  name: 'ApCarousel',
})
const props = defineProps(carouselProps)
const emit = defineEmits(carouselEmits)

const init = () => {
  const { indicator, autoplay, effect } = props
  if (indicator) {
    modules.push(Pagination)
    indicatorClass.value = `apron-carousel-${indicator}`
  }
  if (autoplay) modules.push(Autoplay)
  if (effect) {
    switch (effect) {
      case 'fade':
        modules.push(EffectFade)
        break
      case 'cube':
        modules.push(EffectCube)
        break
      default:
        break
    }
  }
}
init ()
</script>

<style src="./carousel.less" lang="less"></style>