<template>
<!-- 餐點菜單 -->
<LoadingView :active="isLoading" />
<div
  v-for=" item in this.apiData " :key="item.id"
  class="col-lg-4 col-6 mb-6"
>
  <div class="card-menu w-100 h-100 d-flex  flex-column justify-content-between text-center">
      <div class="card-img object-fit">
        <RouterLink :to="`/menuDetail/${item.id}`">
          <img :src="item.imageUrl" alt="" class="object-fit-cover w-100" title="點擊可以查看餐點詳細資訊">
        </RouterLink>
      </div>
      <div class="text-primary d-flex flex-column
      justify-content-center justify-content-lg-between p-lg-4 p-1">
          <p class="text-center mb-3">{{item.title}}</p>
          <div class="d-flex justify-content-center align-baseline ">
            <p class="text-danger fw-bold">NT${{item.price}}</p>
            <del class="ms-3" v-if="item.origin_price">{{item.origin_price}}</del>
          </div>
      </div>
      <div class="d-grid">
        <button
          @click.prevent="addCart(item.id, item, 1)"
          class="btn btn-outline-primary py-3 d-flex justify-content-center align-items-center text-center"
          type="button"
          :disabled="item.id === status?.addCartLoading"
        >
          <div
            class="spinner-border text-secondary me-4" role="status"
            v-if="item.id === status?.addCartLoading"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <span class="d-none d-lg-block">加入購物車</span>
          <span        class="material-symbols-outlined me-1 d-lg-none">
                shopping_cart
          </span>
        </button>
      </div>
  </div>
</div>
<AddCartToast ref="addCartToast" :productTemp="productTemp" @deleteCart="delCart"></AddCartToast>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from 'pinia'
import AddCartToast from '@/components/AddCartToast.vue'
import cartStore from '@/stores/cartStore.js'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  // props: ['categoryTitle'],
  components: {
    AddCartToast
  },
  data () {
    return {
      apiData: {},
      productTemp: {},
      // 用來刪除最新一筆的購物車訂單id
      isLoading: false
    }
  },
  mounted () {
    this.getProducts()
  },
  watch: {
    '$route.query': {
      handler () {
        this.getProducts()
      },
      deep: true
    },
    cartUpdated () {
      this.$refs.addCartToast.show()
      this.setCartUpdate()
    }
  },
  computed: {
    ...mapState(cartStore, ['carts', 'status', 'cartUpdated'])
  },
  methods: {
    ...mapActions(cartStore, ['addCart', 'delCart', 'setCartUpdate']),
    getProducts (category = '') {
      // const category = this.$route.query.category
      this.isLoading = true
      axios.get(`${VITE_API}/api/${VITE_PATH}/products?category=${this.$route.query.category}`)
        .then((Response) => {
          this.apiData = Response.data.products
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
          this.isLoading = false
        })
    }
  }
}
</script >
