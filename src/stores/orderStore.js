import { defineStore } from 'pinia'
import axios from 'axios'

const { VITE_API, VITE_PATH } = import.meta.env

export default defineStore('orderStore', {
  state: () => ({
    userOrders: {},
    orderItem: {},
    isLoading: true,
    orderTotal: 0,
    userData: {}
  }),
  actions: {
    getOrders () {
      const url = `${VITE_API}api/${VITE_PATH}/orders`
      axios.get(url)
        .then((res) => {
          this.userOrders = res.data.orders
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    },
    getOrderItem (id) {
      const url = `${VITE_API}api/${VITE_PATH}/order/${id}`
      axios.get(url)
        .then((res) => {
          this.orderItem = res.data.order.products
          this.orderTotal = res.data.order.total
          this.userData = res.data.order.user
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    }
  }
})
