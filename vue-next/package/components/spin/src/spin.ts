import type { ExtractPropTypes, PropType } from 'vue'
import type Spin from './spin.vue'

export const spinProps = {
  loading: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: 'spinning'
  },
  position: {
    type: String,
    default: 'center-center'
  },
  content: {
    type: String,
    default: '加载中...'
  }
} 
export type SpinProps = ExtractPropTypes<typeof spinProps>

export const spinEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type SpinEmits = typeof spinEmits

export type SpinInstance = InstanceType<typeof Spin>