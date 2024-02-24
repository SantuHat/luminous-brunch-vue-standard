<template>
  <header class="position-relative bg-light">
  <nav class="nav">
    <div class="container-lg d-flex justify-content-between align-items-center py-5">
      <a href="index.html">
        <img class="d-none d-md-block" src="/Logo-lg.png" alt="Logo-lg" />
        <img class="d-md-none" src="/Logo-sm.png" alt="Logo-sm" />
      </a>
      <ul class="list-unstyled d-lg-flex mb-0 align-items-center dropdownNavbar bg-light">
        <li class="nav_item border-bottom-1">
          <RouterLink to="/aboutus"><a class="py-4 py-lg-3 px-5 fw-500 d-block" href="#">關於我們</a></RouterLink>
        </li>
        <li class="nav_item border-bottom-1">
          <RouterLink to="/newsmain"><a class="py-4 py-lg-3 px-5 fw-500 d-block" href="#">最新消息/優惠</a></RouterLink>
        </li>
        <li class="nav_item">
          <a class="py-4 px-5 fw-500 position-relative selectMenu d-block border-bottom-1 d-flex justify-content-between"
            href="#">線上訂餐<span class="material-symbols-outlined align-bottom">
              arrow_drop_down
            </span></a>
          <ul class="dropdownMenu position_absolute_lg list-unstyled ps-0">
            <li>
              <a class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500" href="4-1_menu-salad.html?menu=Salad">沙拉系列</a>
            </li>
            <li>
              <a class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                href="4-1_menu-salad.html?menu=Burger">漢堡系列</a>
            </li>
            <li>
              <a class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                href="4-1_menu-salad.html?menu=Sandwich">三明治系列</a>
            </li>
            <li>
              <a class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                href="4-1_menu-salad.html?menu=Brunch">早午餐拼盤</a>
            </li>
            <li>
              <a class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                href="4-1_menu-salad.html?menu=Pasta">義大利麵系列</a>
            </li>
            <li>
              <a class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500" href="4-1_menu-salad.html?menu=Drink">飲品</a>
            </li>
          </ul>
        </li>
        <RouterLink to="/usercart">
          <li class="nav_item border-bottom-1">
            <a class="py-4 py-lg-3 px-5 fw-500 d-block d-flex" href="#">
              <span class="material-symbols-outlined me-1">
                shopping_cart
              </span>
              <span>購物車</span>
            </a>
          </li>
        </RouterLink>
        <RouterLink to="/userlogin">
          <li class="memberLogin">
            <a class="py-4 py-lg-3 px-5 fw-500 d-block" href="#">會員註冊/登入</a>
          </li>
        </RouterLink>
        <li class="memberCenterItem">
          <a class="selectMemberCenter py-4 px-5 fw-500 position-relative d-block border-bottom-1 d-flex justify-content-between"
            href="#">會員中心<span class="material-symbols-outlined align-bottom">
              arrow_drop_down
            </span></a>
          <ul class="dropdownMemberCenter position_absolute_lg list-unstyled ps-0">
            <li>
              <a class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                href="6-1-1-1_modify-member-info.html">修改會員資料</a>
            </li>
            <li>
              <a class="py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500"
                href="6-1-1-2_reservation-info.html">查看訂位資訊</a>
            </li>
            <li>
              <a class="logOutBtn py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500" href="index.html">登出</a>
            </li>
          </ul>
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

export default {
  name: 'HeaderView',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(counterStore, ['increment'])
  },
  computed: {
    ...mapState(counterStore, ['count'])
  }
}
</script>

<style scoped>

</style>
