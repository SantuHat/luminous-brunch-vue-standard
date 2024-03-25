<template>
  <header class="bg-light box_shadow_bottom sticky-top">
    <nav class="navbar navbar-expand-lg bg-body-tertiary py-3">
      <div class="container-fluid d-flex justify-content-between p-lg-3 px-0">
        <RouterLink to="/">
          <h1 class="mb-0">
            <img class="d-none d-md-block" src="/Logo-lg.png" alt="Logo-lg" />
            <img class="d-md-none" src="/Logo-sm.png" alt="Logo-sm" />
          </h1>
        </RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-meun"
          aria-controls="navbar-meun"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-lg-grow-0" id="navbar-meun">
          <ul
            class="navbar-nav mb-2 mb-lg-0 align-items-lg-center"
          >
            <li class="nav_item border-bottom-1">
              <RouterLink to="/aboutus"
                ><a class="py-4 py-lg-3 px-5 fw-bold d-block" href="#"
                  >關於我們</a
                ></RouterLink
              >
            </li>
            <li class="nav_item border-bottom-1">
              <RouterLink to="/newsmain"
                ><a class="py-4 py-lg-3 px-5 fw-bold d-block" href="#"
                  >最新消息/優惠</a
                ></RouterLink
              >
            </li>
            <li
              class="nav_item dropdown"
              id="orderFoodOnline"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              ref="orderFoodOnline"
            >
              <a
                class="py-4 px-5 fw-bold selectMenu d-block border-bottom-1 d-flex justify-content-between dropdown-toggle align-items-center"
                href="javascript:;" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                >線上訂餐
              </a>
              <ul
                class="dropdown-menu dropdownMenu list-unstyled ps-0 py-0"
                aria-labelledby="orderFoodOnline"
              >
                <li>
                  <RouterLink
                    class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                    :to="`/menuview/menulist?category=salad`"
                    >沙拉系列</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                    :to="`/menuview/menulist?category=burger`"
                    >漢堡系列</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                    :to="`/menuview/menulist?category=sandwich`"
                    >三明治系列</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                    :to="`/menuview/menulist?category=brunch`"
                    >早午餐拼盤</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                    :to="`/menuview/menulist?category=pasta`"
                    >義大利麵系列</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                    :to="`/menuview/menulist?category=drink`"
                    >飲品</RouterLink
                  >
                </li>
              </ul>
            </li>
            <li
              class="nav_item border-bottom-1 dropdown" ref="cartFrame"
            >
              <a
                class="py-lg-2 px-1 fw-bold d-block d-flex nav-link dropdown-toggle dropdown-toggle-cart" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                href="javascript:;"
              >
                <span class="material-symbols-outlined pe-0 px-5">
                  shopping_cart
                </span>
                <span
                  class=" badge rounded-pill bg-secondary"
                >
                  {{ cartData.length }}
                  <span class="visually-hidden">unread messages</span>
                </span>
              </a>
              <div
                class="dropdown-menu dropdow_cart bg-pink py-0"
                aria-labelledby="cartFrame"
              >
                <div class="dropdown-menu-content" @click.stop>
                  <h5 v-if="!cartData.length" class="text-center py-3">
                    購物車沒有任何品項~
                  </h5>
                  <ul
                    v-else
                    v-for="item in cartData"
                    :key="item.id"
                    class="list-unstyled"
                  >
                    <div
                      class="dropdown-item d-flex justify-content-between align-items-center"
                      href="#"
                    >
                      <img
                        :src="item.product.imageUrl"
                        class="rounded toast-img"
                        alt="product-img"
                      />
                      <span>
                        {{ item.product.title }}
                        × {{ item.qty }}
                      </span>
                      <span> ${{ item.total }} </span>
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click="delCart(item.id)"
                      >
                        <span class="material-symbols-outlined pt-1">
                          delete
                        </span>
                      </button>
                    </div>
                  </ul>
                </div>
                <div
                  class="dropdown-menu-footer text-center position-relative mb-2"
                >
                  <span class="cartFinalTotal py-3 px-5 mt-3 d-block fw-bold">
                    總計 NT$ {{ cartTotal }}
                  </span>
                  <button
                    :disabled="cartData.length === 0"
                    @click="goChecking"
                    type="button"
                    class="checkoutBtn position-absolute btn btn-primary py-3 px-5 mt-3"
                  >
                    前往結帳
                  </button>
                </div>
              </div>
            </li>

            <li
              v-if="isLogin"
              id="memberCenterItem"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              ref="memberCenterItem"
            >
              <a
                class="py-4 px-5 fw-bold position-relative d-block border-bottom-1 d-flex justify-content-between"
                href="javascript:;"
                >會員中心<span class="material-symbols-outlined align-bottom">
                  arrow_drop_down
                </span></a
              >
            </li>
            <li v-else class="memberLogin">
              <RouterLink
                to="/userlogin"
                class="py-4 py-lg-3 px-5 fw-bold d-block"
                >會員註冊/登入</RouterLink
              >
            </li>
            <ul
              v-if="isLogin"
              class="dropdown-menu dropdownMemberCenter list-unstyled ps-0 py-0"
              aria-labelledby="memberCenterItem"
            >
              <li>
                <RouterLink
                  class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                  to="/userorders"
                  >查看訂單資訊</RouterLink
                >
              </li>
              <li @click="logOut">
                <RouterLink
                  class="logOutBtn py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                  to="/"
                  >登出</RouterLink
                >
              </li>
            </ul>
          </ul>
        </div>
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
      isMemberActive: false,
      cartFrame: '',
      orderFoodOnline: '',
      memberCenterItem: ''
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCarts', 'delCart']),
    ...mapActions(loginStore, ['setLogin', 'getLogin']),

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
    this.cartFrame = new Dropdown(this.$refs.cartFrame)
  },
  components: { RouterLink }
}
</script>

<style scoped>
.dropdow_cart {
  /* width: 100%; */
  max-width: 500px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  &.dropdown-menu{
    left: -200px;
  }
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
  box-shadow: 0 -1px 8px rgba(0, 0, 0, 0.2), 0 -3px 4px rgba(0, 0, 0, 0.14),
    0 -3px 3px -2px rgba(0, 0, 0, 0.12);
}
.dropdown-toggle-cart::after {
  display: none;
}
</style>
