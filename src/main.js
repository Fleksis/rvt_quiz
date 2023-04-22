import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import { quizzes } from "./helper/quizzes";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

window.quizzes = ref(quizzes)