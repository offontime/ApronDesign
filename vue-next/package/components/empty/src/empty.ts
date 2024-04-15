import type { ExtractPropTypes, PropType } from 'vue'
import type Empty from './empty.vue'

export const emptyProps = {
  icon: {
    type: String,
    default: 'empty',
  },
  description: {
    type: String,
    default: '暂无数据',
  },
  bordered: { type: Boolean, default: true },
} 
export type EmptyProps = ExtractPropTypes<typeof emptyProps>

export const emptyEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type EmptyEmits = typeof emptyEmits

export type EmptyInstance = InstanceType<typeof Empty>