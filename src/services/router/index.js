import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue';
import GoogleMapComponent from '@/components/GoogleMap/GoogleMapComponent.vue';
import About from '@/views/About.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/map',
        name: 'Map',
        component: GoogleMapComponent,
        props: true
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
