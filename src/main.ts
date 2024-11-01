import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import loading from './components/loading/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.directive('focus', {
    mounted: (el: HTMLInputElement) => el.focus()
})
app.use(createPinia())
app.use(router)
app.use(loading)
app.use(ElementPlus)
app.provide('message', 'hello');
app.mount('#app')
