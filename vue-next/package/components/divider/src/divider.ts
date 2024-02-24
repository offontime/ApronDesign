import type { ExtractPropTypes, PropType } from 'vue'
import type Divider from './divider.vue'

export const dividerProps = {
  orientation: {
    type: String,
    default: 'center',
  },
  lineStyle: {
    type: String,
    default: 'solid'
  }
} 
export type DividerProps = ExtractPropTypes<typeof dividerProps>

export const dividerEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type DividerEmits = typeof dividerEmits

export type Dividernstance = InstanceType<typeof Divider>