import type { ExtractPropTypes, PropType } from 'vue'
import type Select from './select.vue'

export const selectProps = {
  /**
   * @description whether the component is disabled
   */
  disabled: { type: Boolean, default: false },
  modelValue: { type: [String, Number, null], default: null },
  fluid: { type: Boolean, default: false },
  options: { type: Array, default: [] },
  allowHover: { type: Boolean, default: false },
  allowBlock: { type: Boolean, default: false },
  placeholder: { type: String, default: '请选择' }
} 

export type SelectProps = ExtractPropTypes<typeof selectProps>

export const selectEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
  'update:modelValue': (newValue: string | number | null) => newValue === null || typeof newValue === 'string' || typeof newValue === 'number'
}
export type SelectEmits = typeof selectEmits

export type SelectInstance = InstanceType<typeof Select>