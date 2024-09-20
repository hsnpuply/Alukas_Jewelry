import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Error404 from '@/views/error404.vue'
import OurLocation from '@/views/ourLocation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias: '/home'
    },

    {
      path: '/location',
      name: 'location',
      component: OurLocation,
      meta: {
        title: 'Our Location'
      }
    },

    // Write Redirect
    {
      path: '/:catchAll(.*)',
      name: 'Error404',
      component: Error404
    }
  ],
  scrollBehavior(to, from, savePosition) {
    return {
      top: 0,
      behavior: 'smooth',
      left: 0
    }
  }
})

router.beforeEach((to) => {
  document.title = to.meta?.title ?? 'Hasan Shop'
})

export default router

