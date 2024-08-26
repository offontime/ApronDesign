import type { ExtractPropTypes, PropType } from 'vue'
import type Checkbox from './checkbox.vue'

export const checkboxProps = {
  /**
   * @description whether the component has underline
   */
  indeterminate: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  /**
   * @description whether the component is disabled
   */
  disabled: { type: Boolean, default: false },
} 
export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>

export const checkboxEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type CheckboxEmits = typeof checkboxEmits

export type CheckboxInstance = InstanceType<typeof Checkbox>