import CircleButton from './circle-button'
import {
  Breadcrumb,
  BreadcrumbItem,
} from './breadcrumb'
import { Button } from './button'
import { Divider } from './divider'
import { Link } from './link'
import { Space } from './space'
import { Switch } from './switch'
import {
  Timeline,
  TimelineItem
} from './timeline'

import type { Plugin } from 'vue'

export default [
  Breadcrumb,
  BreadcrumbItem,
  Button,
  CircleButton,
  Divider,
  Link,
  Space,
  Switch,
  Timeline,
  TimelineItem
] as Plugin[]