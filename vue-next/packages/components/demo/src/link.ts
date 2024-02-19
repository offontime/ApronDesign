import type { ExtractPropTypes, PropType } from 'vue'
import type Link from './link.vue'

export const linkProps = {
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
export type LinkProps = ExtractPropTypes<typeof linkProps>

export const linkEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type LinkEmits = typeof linkEmits

export type LinkInstance = InstanceType<typeof Link>