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
      },
      {
        path: 'aboutus',
        name: 'AboutUs',
        component: () => import('../views/AboutUs.vue')
      },
      {
        path: 'newsmain',
        name: 'newsMain',
        component: () => import('../views/NewsMain.vue')
      },
      {
        path: 'usercart',
        name: 'usercart',
        component: () => import('../views/UserCart.vue')
      },
      {
        path: 'userlogin',
        name: 'userlogin',
        component: () => import('../views/UserLogin.vue')
      },
      {
        path: 'menuview',
        name: 'MenuView',
        component: () => import('../views/MenuView.vue'),
        children: [
          {
            path: 'menulist',
            name: 'MenuList',
            component: () => import('../components/MenuList.vue')
          }
        ]
      },
      {
        path: 'menuDetail/:id',
        name: 'MenuDetail',
        component: () => import('../views/MenuDetail.vue')
      },
      {
        path: '/dashboard',
        // name: 'about',
        component: () => import('../dashboard/DashBoard.vue'),
        children: [
          {
            path: 'products',
            component: () => import('../dashboard/ProductsView.vue')
          },
          {
            path: 'order',
            component: () => import('../dashboard/OrderView.vue')
          },
          {
            path: 'coupon',
            component: () => import('../dashboard/CouponView.vue')
          }
        ]
      },
      {
        path: '/login',
        // name: 'about',
        component: () => import('../dashboard/LoginView.vue')
      }
    ]
  }
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   component: () => import('../views/dashboard/DashboardView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
