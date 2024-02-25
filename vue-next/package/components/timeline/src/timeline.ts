import type { ExtractPropTypes, PropType } from 'vue'
import type Link from './timeline.vue'

export const timelineProps = {
  /**
   * @description whether the component has underline
   */
  underlined: {
    type: Boolean,
    default: false,
  },
  hoverUnderlined: {
    type: Boolean,
    default: false,
  },
  /**
   * @description whether the component is disabled
   */
  disabled: { type: Boolean, default: false },
  /**
   * @description same as native hyperlink's `href`
   */
  href: { type: String, default: '' },
  /**
   * @description same as native hyperlink's `target`
   */
  target: {
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | string>,
    default: '_self',
  },
} 
export type TimeLineProps = ExtractPropTypes<typeof timelineProps>


export type LinkInstance = InstanceType<typeof Link>