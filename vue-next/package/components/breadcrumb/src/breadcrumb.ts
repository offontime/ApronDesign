import type { ExtractPropTypes } from 'vue'
import type Breadcrumb from './breadcrumb.vue'

export const breadcrumbProps = {
  /**
   * @description 设置分隔符
   */
  separator: {
    type: [String, Number],
    default: '/',
  }
} 
export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>

export type BreadcrumbInstance = InstanceType<typeof Breadcrumb>