import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';
import Dogs from '@/views/Dogs/ListDogs.vue';

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/dogs',
            component: Dogs
        }
    ]
})

export default router;