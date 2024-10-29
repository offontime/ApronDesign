import type { ExtractPropTypes, PropType } from 'vue'
import type Collapse from './collapse.vue'

export const collapseProps = {
  data: {
    type: Array,
    default: [],
  }
} 
export type CollapseProps = ExtractPropTypes<typeof collapseProps>

export const collapseEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type CollapseEmits = typeof collapseEmits

export type CollapseInstance = InstanceType<typeof Collapse>