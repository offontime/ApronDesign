import { withInstall } from '../../utils'

import TimelineComponent from './src/timeline.vue'
import TimelineItemComponent from './src/timeline-item.vue'

export const Timeline = withInstall(TimelineComponent, {
  TimelineItemComponent
})
export const TimelineItem = withInstall(TimelineItemComponent)
export default Timeline

export * from './src/timeline'