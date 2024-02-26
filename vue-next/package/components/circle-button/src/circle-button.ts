import type { ExtractPropTypes, PropType } from 'vue'
import type CircleButton from './circle-button.vue'

export const circleButtonProps = {
  /**
   * @description 主按钮
   */
  isPrimary: {
    type: Boolean,
    default: false,
  },
  isMain: {
    type: Boolean,
    default: false,
  },
  danger: {
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
  theme: { type: String, default: 'none' },
  /**
   * @description same as native hyperlink's `target`
   */
  target: {
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | string>,
    default: '_self',
  },
} 
export type CircleButtonProps = ExtractPropTypes<typeof circleButtonProps>

export const circleButtonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type CircleButtonEmits = typeof circleButtonEmits

export type CircleButtonInstance = InstanceType<typeof CircleButton>