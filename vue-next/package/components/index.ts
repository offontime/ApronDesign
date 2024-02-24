import { Button } from './button'
import { Link } from './link'
import { Space } from './space'
import {
  Breadcrumb,
  BreadcrumbItem,
} from './breadcrumb'
import { Divider } from './divider'

import type { Plugin } from 'vue'

export default [
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Divider,
  Link,
  Space
] as Plugin[]