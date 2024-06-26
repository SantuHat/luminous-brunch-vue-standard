import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // 前台
  {
    path: '/',
    name: 'Front',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '*',
        redirect: '/'
      },
      {
        path: '',
        name: 'Index',
        component: () => import('../views/HomeView.vue')
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
        path: 'newscontainer',
        name: 'newscontainer',
        component: () => import('../views/NewsContainer.vue'),
        children: [
          {
            path: 'newsarticle/:id',
            name: 'newsarticle',
            components: {
              newsarticle: () => import('../views/NewsContent2.vue')
            }
          }
        ]
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
        path: 'userregister',
        name: 'userregister',
        component: () => import('../views/UserRegister.vue')
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
        path: 'NewMenuItems',
        name: 'NewMenuItems',
        component: () => import('../views/NewMenuItems.vue')
      },
      {
        path: 'BrunchSpecialsView',
        name: 'BrunchSpecialsView',
        component: () => import('../views/BrunchSpecialsView.vue')
      },
      {
        path: 'modifymember',
        component: () => import('../views/UserModifyMember.vue')
      },
      {
        path: 'userorders',
        component: () => import('../views/UserOrders.vue')
      },
      {
        path: 'userorderveiw',
        name: 'userOrderVeiw',
        component: () => import('../views/UserOrderVeiw.vue')
      },
      {
        path: 'usercoupons',
        component: () => import('../views/UserCoupons.vue')
      },
      {
        path: 'usercollection',
        component: () => import('../views/UserCollection.vue')
      },
      {
        path: 'userforgetpassword',
        component: () => import('../views/UserForgetPassword.vue')
      }
    ]
  },
  // 後台
  {
    path: '/dashboard',
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
        path: 'article',
        component: () => import('../dashboard/ArticlesViews.vue')
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

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  const element = document.querySelector('#navbar-meun.show')
  if (element) {
    element.classList.remove('show')
  }
  next()
})

export default router
