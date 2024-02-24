import installer from './defaults'
export * from './components'
export * from './constants'
export * from './make-installer'
import './styles/base.less'

export const install = installer.install
export default installer

export { default as dayjs } from 'dayjs'