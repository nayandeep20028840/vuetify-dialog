import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import '/node_modules/@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'

const vuetify = createVuetify({ components })

const app = createApp(App)

app.use(vuetify)

app.mount('#app1')