import CircleButton from './circle-button'
import {
  Breadcrumb,
  BreadcrumbItem,
} from './breadcrumb'
import { Button } from './button'
import { Checkbox } from './checkbox'
import { Divider } from './divider'
import { Link } from './link'
import { Space } from './space'
import { Switch } from './switch'
import {
  Timeline,
  TimelineItem
} from './timeline'
import { Empty } from './empty'
import { Spin } from './spin'

import type { Plugin } from 'vue'

export default [
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Checkbox,
  CircleButton,
  Divider,
  Empty,
  Link,
  Space,
  Spin,
  Switch,
  Timeline,
  TimelineItem
] as Plugin[]