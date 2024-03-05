import { defineStore } from 'pinia'
// vite引入方式，原本是const { defineStore }=Pinia
import axios from 'axios'
const { VITE_API, VITE_PATH } = import.meta.env
export default defineStore('cartStore', {
  state: () => ({
    carts: [], // 全部的購物車品項
    final_total: 0,
    total: 0,
    cart: {}, // 最新加入的購物車品項
    status: {
      addCartLoading: ''
    },
    // 記錄購物車是否更新
    cartUpdated: false
  }),
  actions: {
    // 加入購物車的涵式
    addCart (id, item, qty = 1) {
      // 餐點id
      this.status.addCartLoading = id
      // 整個餐點的資訊
      this.cart = item
      const url = `${VITE_API}/api/${VITE_PATH}/cart`
      const postData = {
        data: {
          product_id: id,
          qty
        }
      }
      axios.post(url, postData)
        .then((res) => {
          console.log('Pinia', res.data.data)
          this.status.addCartLoading = ''
          // 將目前加入的餐點資訊存在cart
          this.cart = res.data.data
          // 更新加入購物車的狀態，讓元件可以開啟吐司
          this.cartUpdated = true
        })
        .catch((err) => {
          console.log(err)
        })
    },
    delCart (id) {
      const { VITE_API, VITE_PATH } = import.meta.env
      axios.delete(`${VITE_API}api/${VITE_PATH}/cart/${id}`)
        .then((res) => {
          console.log(res.data)
          alert('刪除成功！')
          this.getCarts()
        })
    },
    getCarts () {
      const url = `${VITE_API}/api/${VITE_PATH}/cart`
      axios.get(url)
        .then((res) => {
          console.log(res.data)
          this.carts = res.data.data.carts
          this.final_total = res.data.data.final_total
          this.total = res.data.data.total
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setCartUpdate () {
      this.cartUpdated = false
      console.log('購物車狀態更新')
    },
    getProduct () {
      const { id } = this.$route.params
      this.$http.get(`${VITE_API}api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          console.log(res)
          this.product = res.data.product
          // 找出目前分類的中文渲染畫面
          this.matchCategory()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
})
