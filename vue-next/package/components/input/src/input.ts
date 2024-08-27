import type { ExtractPropTypes, PropType } from 'vue'
import type Input from './input.vue'

export const inputProps = {
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  prepend: {
    type: String,
    default: ''
  },
  append: {
    type: String,
    default: ''
  },
  /**
   * @description whether the component is disabled
   */
  disabled: { type: Boolean, default: false },
} 
export type InputProps = ExtractPropTypes<typeof inputProps>

export const inputEmits = {
  input: (evt: KeyboardEvent) => evt instanceof KeyboardEvent,
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type InputEmits = typeof inputEmits

export type InputInstance = InstanceType<typeof Input>