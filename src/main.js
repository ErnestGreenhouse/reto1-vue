import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'
import Menu from 'primevue/menu'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'

import App from './App.vue'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(PrimeVue)
app.component('Button', Button)
app.component('Sidebar', Sidebar)
app.component('Menu', Menu)
app.component('Card', Card)
app.component('Checkbox', Checkbox)

app.mount('#app')