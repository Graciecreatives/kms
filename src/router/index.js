import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import theServices from '@/views/theServices.vue'
import AboutUs from '@/views/AboutUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/services',
      name: 'services',
      component: theServices,
    },

    {
      path: '/about',
      name: 'aboutus',
      component: AboutUs,
    },
  ],
})

export default router
