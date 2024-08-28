import type { ExtractPropTypes, PropType } from 'vue'
import type Input from './input.vue'

export const inputProps = {
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
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
  search: {
    type: Object || null,
    default: null
  },
  allowClear: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  onUpdate: {
    type: Function,
    default: null
  }
} 
export type InputProps = ExtractPropTypes<typeof inputProps>

export const inputEmits = [
  'blur',
  'change',
  'clear',
  'enter',
  'focus',
  'input',
  'search',
  'update:modelValue'
]
export type InputEmits = typeof inputEmits

export type InputInstance = InstanceType<typeof Input>