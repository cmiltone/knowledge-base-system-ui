/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import Notifications from '@kyvg/vue3-notification'

// Plugins
import { registerPlugins } from '@/plugins'
import store from './store'

const app = createApp(App)

registerPlugins(app)

app.use(store);
app.use(Notifications)

app.mount('#app')
