import type { ExtractPropTypes, PropType } from 'vue'
import type BreadcrumbItem from './breadcrumb-item.vue'

export const breadcrumbItemProps = {
  /**
   * @description whether the component has underline
   */
  separator: {
    type: [String, Number]
  },
  /**
   * @description 当前面包屑链接，留空表示不是链接
   */
  href: { type: String, default: '' },
  /**
   * @description same as native hyperBreadcrumb's `target`
   */
  target: {
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | string>,
    default: '_self',
  },
} 

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbItemProps>

export type BreadcrumbItemInstance = InstanceType<typeof BreadcrumbItem>