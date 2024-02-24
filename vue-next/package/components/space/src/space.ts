import type { ExtractPropTypes, PropType } from 'vue'
import type Space from './space.vue'

export const spaceProps = {
  direction: {
    type: String as PropType<'row' | 'column' | string>,
    default: 'row',
  },
} 
export type SpaceProps = ExtractPropTypes<typeof spaceProps>

export type SpaceInstance = InstanceType<typeof Space>