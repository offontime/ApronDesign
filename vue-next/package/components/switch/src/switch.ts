import type { ExtractPropTypes, PropType } from 'vue'
import type Switch from './switch.vue'

export const switchProps = {
  /**
   * @description whether the component is disabled
   */
  disabled: { type: Boolean, default: false },
  /**
   * @description isPrimary
   */
  isPrimary: { type: Boolean, default: false },
  /**
   * @description 值为 true 时颜色
   */
  checkedColor: { type: String, default: 'var(--color-main)' },
  /**
   * @description 值为 true 时颜色
   */
  uncheckedColor: { type: String, default: 'var(--color-background-hover)' },
  /**
   * @description switch size
   */
  size: { type: String, default: 'standard' }
} 
export type SwitchProps = ExtractPropTypes<typeof switchProps>

export const switchEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type SwitchEmits = typeof switchEmits

export type SwitchInstance = InstanceType<typeof Switch>