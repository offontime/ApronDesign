import type { ExtractPropTypes, PropType } from 'vue'
import type Breadcrumb from './breadcrumb.vue'

export const breadcrumbProps = {
  /**
   * @description 设置分隔符
   */
  separator: {
    type: [String, Number]
  }
} 
export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>

export const breadcrumbEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type BreadcrumbEmits = typeof breadcrumbEmits

export type BreadcrumbInstance = InstanceType<typeof Breadcrumb>