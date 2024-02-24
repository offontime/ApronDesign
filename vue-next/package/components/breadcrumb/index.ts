import { withInstall } from '../../utils'

import BreadcrumbComponent from './src/breadcrumb.vue'
import BreadcrumbItemComponent from './src/breadcrumb-item.vue'

export const Breadcrumb = withInstall(BreadcrumbComponent, {
  BreadcrumbItemComponent
})
export const BreadcrumbItem = withInstall(BreadcrumbItemComponent)
export default {
  Breadcrumb,
  BreadcrumbItem
}

export * from './src/breadcrumb'