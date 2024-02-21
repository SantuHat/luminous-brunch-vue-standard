import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Front',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/AboutView.vue')
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/dashboard/DashboardView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
