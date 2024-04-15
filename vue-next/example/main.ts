import ApronDesign from '../package/index'
import IconApron from '@icon-apron/vue-next'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ApronDesign)
app.use(IconApron)
app.mount('#app')
