import type { ExtractPropTypes, PropType } from 'vue'
import type Link from './timeline.vue'

export const timelineItemProps = {
  /**
   * @description label
   */
  label: {
    type: String,
    default: '',
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
export type TimelineItemProps = ExtractPropTypes<typeof timelineItemProps>


export type LinkInstance = InstanceType<typeof Link>