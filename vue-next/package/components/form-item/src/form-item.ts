import type { ExtractPropTypes, PropType } from 'vue'
import type FormItem from './form-item.vue'

export const formItemProps = {
  label: {
    type: String,
    default: ''
  }
} 
export type FormItemProps = ExtractPropTypes<typeof formItemProps>

export const formItemEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type FormItemEmits = typeof formItemEmits

export type FormItemInstance = InstanceType<typeof FormItem>