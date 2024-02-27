import { defineStore } from 'pinia' // vite引入方式，原本是const {defineStore}=Pinia
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
    }
  }),
  actions: {
    // 加入購物車的涵式
    addCart (id, item, qty = 1) {
      this.cart = item
      this.status.addCartLoading = id
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
          console.log(this)
          this.status.addCartLoading = ''
          this.cart = res.data.data
          // 將目前加入的餐點資訊存在cart
          // this.$refs.addCartToast.show()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    delCart (id) {
      const { VITE_API, VITE_PATH } = import.meta.env
      axios.delete(`${VITE_API}api/${VITE_PATH}/cart/${this.cartProductId}`)
        .then((res) => {
          console.log(res.data)
          alert('刪除成功！')
          this.getProducts()
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
    }
  }
})
