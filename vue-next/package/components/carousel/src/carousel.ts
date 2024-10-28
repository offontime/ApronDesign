import type { ExtractPropTypes, PropType } from 'vue'
import type Carousel from './carousel.vue'

export const carouselProps = {
  /**
   * @description data
   */
  data: { type: Array, default: [] },
  /**
   * @description indicator
   */
  indicator: { type: String || Boolean, default: false },
  direction: { type: String, default: 'horizontal' },
  speed: { type: Number, default: 500 },
  autoplay: { type: Boolean, default: false },
  delay: { type: Number, default: 3000 },
  loop: { type: Boolean, default: false },
  navigator: { type: Boolean, default: false },
  effect: { type: String || Boolean, default: false }
} 
export type CarouselProps = ExtractPropTypes<typeof carouselProps>

export const carouselEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type CarouselEmits = typeof carouselEmits

export type CarouselInstance = InstanceType<typeof Carousel>