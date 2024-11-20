import type { ExtractPropTypes, PropType } from 'vue'
import type Form from './form.vue'

export const formProps = {
  /**
   * @description whether the component is disabled
   */
  disabled: { type: Boolean, default: false },
  /**
   * @description same as native hyperlink's `href`
   */
  href: { type: String, default: '' },
  /**
   * @description same as native hyperlink's `target`
   */
  target: {
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | string>,
    default: '_self',
  },
} 
export type FormProps = ExtractPropTypes<typeof formProps>

export const formEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type FormEmits = typeof formEmits

export type FormInstance = InstanceType<typeof Form>