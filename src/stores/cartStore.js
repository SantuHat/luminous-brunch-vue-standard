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
    cartUpdated: false,
    isAreaLoading: false,
    isLoading: false
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
    async delCart (id) {
      const { VITE_API, VITE_PATH } = import.meta.env
      try {
        if (this.carts.length > 1) this.isAreaLoading = true
        await axios.delete(`${VITE_API}api/${VITE_PATH}/cart/${id}`)
          .catch(() => {
            alert('刪除失敗')
          })
        this.getCarts()
        await new Promise(resolve => setTimeout(resolve, 300)) // 等待500毫秒
        this.isAreaLoading = false
      } catch (err) {
        console.log(err)
        this.isAreaLoading = false
      }
    },
    async getCarts () {
      if (!this.isAreaLoading || this.carts.length === 0) this.isLoading = true
      try {
        const url = `${VITE_API}/api/${VITE_PATH}/cart`
        await axios.get(url)
          .then((res) => {
            this.carts = res.data.data.carts
            this.final_total = res.data.data.final_total
            this.total = res.data.data.total
          }).catch((err) => {
            console.log(err)
          })
        await new Promise(resolve => setTimeout(resolve, 300))
        this.isLoading = false
      } catch (err) {
        console.log(err)
        this.isLoading = false
      }
    },
    setCartUpdate () {
      this.cartUpdated = false
      this.getCarts()
    },
    getProduct () {
      const { id } = this.$route.params
      this.$http.get(`${VITE_API}api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product
          // 找出目前分類的中文渲染畫面
          this.matchCategory()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async putCart (id, qty) {
      try {
        this.isAreaLoading = true
        const putData = {
          data: {
            product_id: id,
            qty
          }
        }
        await axios.put(`${VITE_API}api/${VITE_PATH}/cart/${id}`, putData)
        this.getCarts()
        await new Promise(resolve => setTimeout(resolve, 300))
        this.isAreaLoading = false
      } catch (err) {
        console.log(err)
        this.isAreaLoading = false
      }
    },
    setIsLoading (val) {
      this.isLoading = val
    }
  },
  getters: {
    cartData: ({ carts }) => {
      return carts
    },
    cartTotal: ({ total }) => {
      return total
    }
  }
})
