// import './assets/main.css'
import './assets/all.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('LoadingView', Loading)
app.use(VueAxios, axios)
app.mount('#app')
