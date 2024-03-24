<template>
<div class="position-fixed top-0 end-0 p-3" style="z-index: 11">
    <div id="liveToast" class="toast " role="alert" aria-live="assertive" aria-atomic="true" ref="addCartToast">
      <div class="toast-header">
        <span class="material-symbols-outlined add_success">
        done
        </span>
        <strong class="d-flex align-item-center me-auto fs-4">
            已加入購物車
        </strong>
        <small>Now</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
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

<style>
.add_success {
  font-size: 48px;
  font-weight: bold;
  color: green;
}
</style>
