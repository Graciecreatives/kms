import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import theServices from '@/views/theServices.vue'
import AboutUs from '@/views/AboutUs.vue'
import thePortfolio from '@/views/thePortfolio.vue'
import contactPage from '@/views/contactPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignupPage from '@/views/SignupPage.vue'

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
    {
      path: '/portfolio',
      name: 'portfolio',
      component: thePortfolio,
    },
    {
      path: '/contact',
      name: 'contact',
      component: contactPage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage,
    },
  ],
})

export default router
