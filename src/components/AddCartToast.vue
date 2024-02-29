<template>
<div class="position-fixed top-0 end-0 p-3" style="z-index: 11">
    <div id="liveToast" class="toast " role="alert" aria-live="assertive" aria-atomic="true" ref="addCartToast">
      <div class="toast-header">
        <span class="material-symbols-outlined">
            shopping_cart
        </span>
        <strong class="d-flex align-item-center  me-auto fs-4">
            購物車
        </strong>
        <small>Now</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body d-flex align-item-center justify-content-between">
        <img :src="cart.product?.imageUrl"  class="rounded me-2 toast-img" alt="...">
        <div class="d-flex flex-column justify-content-center">
            <p class="fs-5">{{ cart.product?.title }} </p>
            <p>$ {{ cart.product?.price }}</p>
        </div>
        <button type="button" class="btn btn-primary" @click="delCart(cart.id)">
            <span class="material-symbols-outlined">
                delete
            </span>
        </button>
      </div>
    </div>
</div>
</template>
<script>
import { Toast } from 'bootstrap'
import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
export default {
  // 資料從pinia來，這邊的變數叫cart
  data () {
    return {
      addCartToast: null,
      product: {}
    }
  },
  computed: {
    ...mapState(cartStore, ['cart'])
  },
  mounted () {
    this.addCartToast = new Toast(this.$refs.addCartToast)
  },
  methods: {
    show () {
      this.addCartToast.show()
    },
    ...mapActions(cartStore, ['delCart', 'setCartUpdate'])
  }
}
</script>
