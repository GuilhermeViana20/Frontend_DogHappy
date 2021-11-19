import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';
import Dogs from '@/views/Dogs/ListDogs.vue';
import DogDetail from '@/views/Dogs/DogDetail.vue';

//* ÁREA ADMINISTRATIVA
import Create from '@/views/Administrator/Create.vue';

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            name: 'Home',
            path: '/',
            component: Home
        },
        {
            name: 'Dogs',
            path: '/dogs',
            component: Dogs,
        },
        {
            name: 'DogDetail',
            path: '/dog/:id',
            component: DogDetail
        },
        {
            name: 'Create',
            path: '/create',
            component: Create
        }
    ]
})

export default router;