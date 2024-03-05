<template>
  <header class="position-relative bg-light">
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
          <li @click="getCarts()" class="nav_item border-bottom-1" id="cartFrame" data-bs-toggle="dropdown" aria-expanded="false" ref="cartFrame">
            <a class="py-4 py-lg-3 px-5 fw-bold d-block d-flex" href="javascript:;">
              <span class="material-symbols-outlined me-1">
                shopping_cart
              </span>
              <span>購物車</span>
            </a>
          </li>
          <div class="dropdown-menu bg-pink" aria-labelledby="cartFrame"  @click.stop>
            <div class="dropdown-menu-content">
              <ul v-for="(item) in carts" :key="item.id" class="list-unstyled">
                <div class="dropdown-item" href="#">
                  <img :src="item.product.imageUrl"  class="rounded me-2 toast-img" alt="...">
                      {{ item.product.title }}
                      X {{ item.qty }}
                      ${{ item.product.price }}
                  <button type="button" class="btn btn-primary" @click="delCart(item.id)">
                      <span class="material-symbols-outlined pt-1">
                          delete
                      </span>
                  </button>
                </div>
              </ul>
            </div>
            <div class="dropdown-menu-footer text-center">
              <RouterLink to="/usercart">
                <button type="button" class="btn btn-primary py-3 px-5 mt-3">前往結帳</button>
              </RouterLink>
            </div>
          </div>

        <!-- </RouterLink> -->
        <li v-if="isLogin" class="memberCenterItem">
          <a @click="dropdownMemberCenter" class="selectMemberCenter py-4 px-5 fw-bold position-relative d-block border-bottom-1 d-flex justify-content-between"
            href="javascript:;">會員中心<span class="material-symbols-outlined align-bottom">
              arrow_drop_down
            </span></a>
          <ul class="dropdownMemberCenter position_absolute_lg list-unstyled ps-0" :class="{'active': isMemberActive}">
            <li>
              <RouterLink class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                to="/modifymember">修改會員資料</RouterLink>
            </li>
            <li>
              <RouterLink class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                to="/userorders">查看訂單資訊</RouterLink>
            </li>
            <li>
              <RouterLink class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                to="/usercoupons">查詢優惠券</RouterLink>
            </li>
            <li>
              <RouterLink class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                to="/usercollection">查看我的收藏</RouterLink>
            </li>
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
import counterStore from '@/stores/counter'
import { RouterLink } from 'vue-router'
import { Dropdown } from 'bootstrap'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  name: 'HeaderView',
  data () {
    return {
      isActive: false,
      isMemberActive: false,
      isLogin: JSON.parse(localStorage.getItem('isLogin')) || false,
      cartFrame: '',
      carts: []
    }
  },
  methods: {
    ...mapActions(counterStore, ['increment']),
    dropdownMenu () {
      this.isActive = !this.isActive
    },
    dropdownMemberCenter () {
      this.isMemberActive = !this.isMemberActive
    },
    logOut () {
      localStorage.setItem('isLogin', false)
      this.isLogin = false
      console.log(this.isLogin)
      alert('已登出')
    },
    getCarts () {
      const url = `${VITE_API}/api/${VITE_PATH}/cart`
      this.isLoading = true
      this.$http.get(url)
        .then((res) => {
          const { carts } = res.data.data
          this.carts = carts
          this.isLoading = false
          console.log(carts)
        })
        .catch((err) => {
          console.log(err)
          this.isLoading = false
        })
    },
    delCart (id) {
      const url = `${VITE_API}/api/${VITE_PATH}/cart/${id}`
      this.isLoading = true
      this.$http.delete(url)
        .then(() => {
          this.isLoading = false
          this.getCarts()
        })
        .catch((err) => {
          console.log(err)
          this.isLoading = false
        })
    }
  },
  computed: {
    ...mapState(counterStore, ['count'])
  },
  created () {
    this.getCarts()
  },
  mounted () {
    const isLogin = localStorage.getItem('isLogin')
    this.isLogin = isLogin === 'true'
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
</style>
