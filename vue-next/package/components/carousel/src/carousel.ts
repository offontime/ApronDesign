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
  autoplay: { type: Boolean, default: false },
  /**
   * @description same as native hyperlink's `target`
   */
  target: {
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | string>,
    default: '_self',
  },
} 
export type CarouselProps = ExtractPropTypes<typeof carouselProps>

export const carouselEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type CarouselEmits = typeof carouselEmits

export type CarouselInstance = InstanceType<typeof Carousel>