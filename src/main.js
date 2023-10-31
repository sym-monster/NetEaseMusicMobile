import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installVantComponents from './plugins'

let app = createApp(App)
installVantComponents(app)

app.use(store)
    .use(router)
    .mount('#app')
