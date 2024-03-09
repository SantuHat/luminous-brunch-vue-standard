<template>
  <header class="position-relative bg-light box_shadow_bottom">
  <nav class="nav">
    <div class="container-lg d-flex justify-content-between align-items-center py-5">
      <RouterLink to="/">
        <img class="d-none d-md-block" src="/Logo-lg.png" alt="Logo-lg" />
        <img class="d-md-none" src="/Logo-sm.png" alt="Logo-sm" />
      </RouterLink>
      <ul class="list-unstyled d-lg-flex mb-0 align-items-center dropdownNavbar bg-light">
        <li class="nav_item border-bottom-1">
          <RouterLink to="/aboutus"><a class="py-4 py-lg-3 px-5 fw-bold d-block" href="#">關於我們</a></RouterLink>
        </li>
        <li class="nav_item border-bottom-1">
          <RouterLink to="/newsmain"><a class="py-4 py-lg-3 px-5 fw-bold d-block" href="#">最新消息/優惠</a></RouterLink>
        </li>
        <li class="nav_item">
          <a @click="dropdownMenu" class="py-4 px-5 fw-bold position-relative selectMenu d-block border-bottom-1 d-flex justify-content-between"
            href="javascript:;">線上訂餐<span class="material-symbols-outlined align-bottom">
              arrow_drop_down
            </span></a>
          <ul class="dropdownMenu position_absolute_lg list-unstyled ps-0" :class="{'active': isActive}">
            <li>
              <RouterLink class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500" :to="`/menuview/menulist?category=salad`">沙拉系列</RouterLink>
            </li>
            <li>
              <RouterLink class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
              :to="`/menuview/menulist?category=burger`">漢堡系列</RouterLink>
            </li>
            <li>
              <RouterLink class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
              :to="`/menuview/menulist?category=sandwich`">三明治系列</RouterLink>
            </li>
            <li>
              <RouterLink class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
              :to="`/menuview/menulist?category=brunch`">早午餐拼盤</RouterLink>
            </li>
            <li>
              <RouterLink class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
              :to="`/menuview/menulist?category=pasta`">義大利麵系列</RouterLink>
            </li>
            <li>
              <RouterLink class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500" :to="`/menuview/menulist?category=drink`">飲品</RouterLink>
            </li>
          </ul>
        </li>
        <!-- <RouterLink to="/usercart"> -->
          <!-- Bootstrap Dropdowns -->
          <li class="nav_item border-bottom-1 me-2" id="cartFrame" data-bs-toggle="dropdown" aria-expanded="false" ref="cartFrame">
            <a class="py-lg-2 px-1 fw-bold d-block d-flex position-relative" href="javascript:;">
              <span class="material-symbols-outlined me-1">
                shopping_cart
              </span>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                {{ cartData.length }}
                <span class="visually-hidden">unread messages</span>
              </span>
            </a>
          </li>
          <div class="dropdown-menu bg-pink" aria-labelledby="cartFrame">
            <div class="dropdown-menu-content" @click.stop>
              <h5 v-if="!cartData.length" class="text-center py-3">購物車沒有任何品項~</h5>
              <ul v-else v-for="(item) in cartData" :key="item.id" class="list-unstyled">
                <div class="dropdown-item d-flex justify-content-between align-items-center" href="#">
                  <img :src="item.product.imageUrl"  class="rounded me-2 toast-img" alt="...">
                    <span>
                      {{ item.product.title }}
                      × {{ item.qty }}
                    </span>
                    <span>
                      ${{ item.total }}
                    </span>
                  <button type="button" class="btn btn-primary" @click="delCart(item.id)">
                      <span class="material-symbols-outlined pt-1">
                          delete
                      </span>
                  </button>
                </div>
              </ul>
            </div>
            <div class="dropdown-menu-footer text-center position-relative">
              <span class="cartFinalTotal py-3 px-5 mt-3 d-block fw-bold">
                總計 NT$ {{ cartTotal }}
              </span>
                <button :disabled="cartData.length === 0" @click="goChecking" type="button" class="checkoutBtn position-absolute btn btn-primary py-3 px-5 mt-3">前往結帳</button>
            </div>
          </div>

        <!-- </RouterLink> -->
        <li v-if="isLogin" class="memberCenterItem">
          <a @click="dropdownMemberCenter" class="selectMemberCenter py-4 px-5 fw-bold position-relative d-block border-bottom-1 d-flex justify-content-between"
            href="javascript:;">會員中心<span class="material-symbols-outlined align-bottom">
              arrow_drop_down
            </span></a>
          <ul class="dropdownMemberCenter position_absolute_lg list-unstyled ps-0" :class="{'active': isMemberActive}">
            <!-- <li>
              <RouterLink class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                to="/modifymember">修改會員資料</RouterLink>
            </li> -->
            <li>
              <RouterLink class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                to="/userorders">查看訂單資訊</RouterLink>
            </li>
            <!-- <li>
              <RouterLink class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                to="/usercoupons">查詢優惠券</RouterLink>
            </li>
            <li>
              <RouterLink class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                to="/usercollection">查看我的收藏</RouterLink>
            </li> -->
            <li @click="logOut">
              <RouterLink class="logOutBtn py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500" to="/">登出</RouterLink>
            </li>
          </ul>
        </li>
        <li v-else class="memberLogin">
          <RouterLink to="/userlogin" class="py-4 py-lg-3 px-5 fw-bold d-block">會員註冊/登入</RouterLink>
        </li>
      </ul>
      <a class="hamberMenu d-lg-none" href="#">
        <span class="material-symbols-outlined"> menu </span>
      </a>
      <a class="closeIcon d-lg-none" href="#" style="display: none">
        <span class="material-symbols-outlined"> close </span>
      </a>
    </div>
  </nav>
</header>
<div class="navbar_overlay"></div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { RouterLink } from 'vue-router'
import { Dropdown } from 'bootstrap'
import cartStore from '../stores/cartStore.js'
import loginStore from '../stores/loginStore'

export default {
  name: 'HeaderView',
  data () {
    return {
      isActive: false,
      isMemberActive: false,
      cartFrame: ''
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCarts', 'delCart']),
    ...mapActions(loginStore, ['setLogin', 'getLogin']),
    dropdownMenu () {
      this.isActive = !this.isActive
    },
    dropdownMemberCenter () {
      this.isMemberActive = !this.isMemberActive
    },
    logOut () {
      this.setLogin(false)
      alert('已登出')
    },
    goChecking () {
      this.$router.push(this.isLogin ? '/usercart' : '/userlogin')
    }
  },
  computed: {
    ...mapState(cartStore, ['cartData', 'cartTotal']),
    ...mapState(loginStore, ['isLogin'])
  },
  created () {
    this.getCarts()
  },
  mounted () {
    this.getLogin()
    // console.log('this.$refs.cartFrame', this.$refs.cartFrame)
    this.cartFrame = new Dropdown(this.$refs.cartFrame)
    // console.log(' this.cartFrame', this.cartFrame)
  },
  components: { RouterLink }
}
</script>

<style scoped>
.dropdown-menu {
  width: 100%;
  max-width: 500px;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.15);
}
.dropdown-menu-content {
  height: 320px;
  overflow-y: auto;
}
.dropdown-menu-content::-webkit-scrollbar {
  display: none;
}
.checkoutBtn {
  bottom: 0%;
  right: 2.5%;
  font-weight: 700;
}
.cartFinalTotal {
  font-size: 18px;
}
.box_shadow_bottom {
  box-shadow: 0 -1px 8px rgba(0,0,0,0.2), 0 -3px 4px rgba(0,0,0,0.14), 0 -3px 3px -2px rgba(0,0,0,0.12);
}
</style>
