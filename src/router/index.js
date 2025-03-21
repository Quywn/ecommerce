import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    // Các route khác
]

const router = createRouter({
    history: createWebHistory(),  // Dùng history mode
    routes
});

export default router;