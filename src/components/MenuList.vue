<template>
<!-- 餐點菜單 -->
<div class="bg-pink py-6">
        <div class="container">
          <div class="menu-container row flex-wrap">
            <!-- JS渲染菜單品項 -->
            <!-- <add-Cart-Toast ref="addCartToast"></add-Cart-Toast> -->
            <!-- <meal-card></meal-card> -->
          <div
            v-for=" item in this.apiData " :key="item.id"
            class="col-lg-4 mb-6"
          >
              <div class="card-menu">
                  <div class="card-img object-fit">
                    <RouterLink :to="`/menuDetail/${item.id}`">
                      <img :src="item.imageUrl" alt="" class="menu-img" title="點擊可以查看餐點詳細資訊">
                    </RouterLink>
                  </div>
                  <div class="text-primary d-flex flex-column justify-content-between p-4">
                      <h6 class="text-center mb-3">{{item.title}}</h6>
                      <div class="d-flex justify-content-center">
                        <h6 class="text-danger fw-bold">${{item.price}}NT</h6>
                        <del class="ms-3" v-if="item.origin_price">${{item.origin_price}}</del>
                      </div>
                  </div>
                  <div class="d-grid">
                    <button
                      @click.prevent="addCart(item.id, item)"
                      class="btn btn-outline-primary py-3"
                      type="button"
                    >
                      加入購物車
                    </button>
                  </div>
              </div>
          </div>

    </div>
  </div>
</div>
<AddCartToast ref="addCartToast" :productTemp="productTemp" @deleteCart="delCart"></AddCartToast>
</template>
<script >
import axios from 'axios'
import AddCartToast from '../components/AddCartToast.vue'
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  // props: ['categoryTitle'],
  components: {
    AddCartToast
  },
  data () {
    return {
      apiData: {},
      productTemp: {}
      // 用來刪除最新一筆的購物車訂單id
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
    }
  },
  methods: {
    login () {
    // 先登入
      this.$http.post(`${this.hexUrl}/admin/signin`, {
        username: 'luminous@gmail.com',
        password: 'luminous'
      })
        .then((res) => {
          console.log('登入的', res.data)
          const { expired, token } = res.data
          document.cookie = `myToken=${token};expires=${new Date(expired)}`
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 後驗證
    adminCheck () {
      const myToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      this.$http.defaults.headers.common.Authorization = myToken
      this.$http.post(`${this.hexUrl}/api/user/check`)
        .then((response) => {
          console.log('驗證的', response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getProducts (category = '') {
      // const category = this.$route.query.category
      console.log(category)
      axios.get(`${VITE_API}/api/${VITE_PATH}/products?category=${this.$route.query.category}`)
        .then((Response) => {
          this.apiData = Response.data.products
          console.log(Response)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 加入購物車的涵式
    addCart (id, item) {
      console.log(id)
      this.productTemp = item
      const url = `${VITE_API}/api/${VITE_PATH}/cart`
      const postData = {
        data: {
          product_id: id,
          qty: 1
        }
      }
      this.$http.post(url, postData)
        .then((res) => {
          console.log(res)
          console.log(res.data.data)
          this.cartProductId = res.data.data.id
          this.$refs.addCartToast.show()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    delCart (id) {
      const { VITE_API, VITE_PATH } = import.meta.env
      this.$http.delete(`${VITE_API}api/${VITE_PATH}/cart/${this.cartProductId}`)
        .then((res) => {
          console.log(res.data)
          alert('刪除成功！')
          this.getProducts()
        })
    }
  }
}
</script >
