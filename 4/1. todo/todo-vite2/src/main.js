import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.esm.min.js'

const app = createApp(App)
const offset = (new Date().getTimezoneOffset())
const today = new Date((new Date() - (offset*60*1000))).toISOString().split('T')[0]
const time = new Date((new Date() - (offset*60*1000))).toISOString().slice(0, 19).replace("T", " ")
app.provide('today', today)
app.provide('now', time)
app.provide('today1', new Date().toISOString().split('T')[0])
app.provide('now1', new Date().toISOString().slice(0, 19).replace("T", " "))
app.mount('#app')
