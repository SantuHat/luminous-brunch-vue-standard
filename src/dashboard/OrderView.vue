<!-- eslint-disable no-tabs -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
  <LoadingView :active="isLoading"></LoadingView>
<div class="container-fluid">
	<table class="table mt-4">
      <thead>
          <tr>
              <th width="120">購買時間</th>
              <th width="120">Email</th>
              <th width="120">購買品項</th>
              <th width="120">應付金額</th>
              <th width="100">是否付款</th>
              <th width="200">檢視</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="item in orders" :key="item.id">
            <td>{{$filters.date(item.create_at)}}</td>
            <td>{{item.user.email}}</td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in item.products" :key="i">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">{{ item.total }}</td>
            <td>
              <div class="form-check form-switch">
                    <label class="form-check-label" for="#">
                        <input class="form-check-input" type="checkbox" v-model="item.is_paid">
                        <span  calss="text-success" v-if="item.is_paid">已付款</span>
                        <span  class="text-muted" v-else>未付款</span>
                    </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button class="btn btn-outline-primary btn-sm" @click="openOrder(item)">檢視</button>
                <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
              </div>
            </td>
          </tr>
        </tbody>
  </table>
</div>
<OrderModal :order="tempOrder" ref="OrderModal" @update-order="closureModal"></OrderModal>
<DelModal :item="tempOrder" ref="delModal" @del-item="dleOrder"></DelModal>
<PaginationView :pagination="orderPage" @emit-pages="getOrder"></PaginationView>
</template>

<script>
import OrderModal from '../components/backComponents/OrderModal.vue'
import DelModal from '../components/backComponents/DelModal.vue'
import PaginationView from '../components/backComponents/PaginationView.vue'

const { VITE_API, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      orders: [],
      orderPage: {},
      tempOrder: {},
      isNew: false,
      isLoading: false
    }
  },
  components: {
    DelModal,
    OrderModal,
    PaginationView
  },
  methods: {
    getOrder (page) {
      const url = `${VITE_API}/api/${VITE_PATH}/admin/orders?page=${page}`
      this.isLoading = true
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false
          this.orders = res.data.orders
          this.orderPage = res.data.pagination
          console.log(res)
        })
    },
    closureModal () {
      const orderClosure = this.$refs.OrderModal
      orderClosure.hideModal()
    },
    openOrder (item) {
      this.tempOrder = { ...item }
      const orderComponent = this.$refs.OrderModal
      orderComponent.showModal()
    },
    openDelModal (item) {
      this.tempOrder = { ...item }
      const delModal = this.$refs.delModal
      delModal.showModal()
    },
    dleOrder () {
      const delOrder = this.$refs.delModal
      const url = `${VITE_API}/api/${VITE_PATH}/admin/order/${this.tempOrder.id}`
      this.$http.delete(url)
        .then(() => {
          this.getOrder()
          delOrder.hideModal()
        })
    }
  },
  mounted () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    // console.log(this.orders)
    // this.OrderModal = new bootstrap.Modal(this.$refs.modal);
    // this.orderDel = new bootstrap.Modal(this.$refs.delProductModal);
    this.getOrder()
  }
}
</script>
