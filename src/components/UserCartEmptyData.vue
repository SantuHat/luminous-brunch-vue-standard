<template>
  <div class="empty-data text-center">
    <h5 class="py-3">購物車沒有任何品項~</h5>
    <div class="cart-icon-box text-center my-7">
      <div class="cart-icon-box-wrap">
        <svg data-v-d9ddfac7="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16"><path data-v-d9ddfac7="" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"></path></svg>
      </div>
    </div>
    <RouterLink :to="`/menuview/menulist?category=salad`" @click="goMenu">
      <button
        type="button"
        class="checkoutBtn btn btn-primary py-3 px-5 mb-5"
      >
        前往點餐
      </button>
    </RouterLink>
  </div>
</template>
<script>
export default {
  name: 'UserCartEmptyData',
  methods: {
    goMenu () {
      this.$router.push('/menuview/menulist?category=salad')
    }
  }
}
</script>
<style>
.cart-icon-box-wrap {
  display: inline-block;
  width: 60px;
  height: 60px;
  color: var(--bs-primary);
}
.cart-icon-box-wrap svg {
  width: 100%;
  height: 100%;
}
@media (max-width:576px) {
  .empty-data {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
