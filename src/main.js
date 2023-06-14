
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Exercice from "./pages/Exercice.vue";
import Correction from "./pages/Correction.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Exercice },
        { path: '/correction', component: Correction },
    ]
})

createApp(App)
    .use(router)
    .mount('#app')
