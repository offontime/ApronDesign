import type { ExtractPropTypes, PropType } from 'vue'
import type Button from './button.vue'

export const buttonProps = {
  /**
   * @description whether the component is disabled
   */
  disabled: { type: Boolean, default: false },
  size: {
    type: String as PropType<'standard' | 'small' | string>,
    default: 'standard',
  },
  type: {
    type: String as PropType<'primary' | 'main' | 'default' | 'dashed' | 'text' | 'link' | string>,
    default: 'default',
  },
  fluid: { type: Boolean, default: false },
  danger: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
} 
export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type ButtonEmits = typeof buttonEmits

export type ButtonInstance = InstanceType<typeof Button>