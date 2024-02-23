// import './assets/main.css'
import './assets/all.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
import { currency, date } from './methods/filters'
import $httpMessageState from './methods/pushMessageState'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('LoadingView', Loading)
app.config.globalProperties.$filters = {
  date,
  currency
}
app.config.globalProperties.$httpMessageState = $httpMessageState
app.use(VueAxios, axios)
app.mount('#app')
