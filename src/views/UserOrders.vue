<template>
  <LoadingView :active="isLoading" />
  <div class="container mb-5">
    <h2 class="text-center my-5">訂單資訊</h2>
    <div class="overflow-x">
      <table class="border border-gray box-shadow-gray-300 mx-auto w-100">
        <thead class="bg-gray text-center">
          <tr>
            <th class="px-lg-6 py-lg-4" colspan="2">訂單編號</th>
            <th class="px-lg-6 py-lg-4">訂單日期</th>
            <th class="px-lg-6 py-lg-4">付款狀態</th>
            <th class="px-lg-6 py-lg-4">訂單金額</th>
            <!-- <th class="px-lg-6 py-lg-4">訂單狀態</th> -->
            <!-- <th class="px-lg-6 py-lg-4"></th> -->
          </tr>
        </thead>
        <tbody class="position-relative">
          <tr v-for="(item) in userOrders" :key="item.id">
            <th colspan="2" class="text-center">
              <RouterLink class="orderId_hover" :to="`/userorderveiw?orderId=${item.id}`">{{ item.id }}</RouterLink></th>
            <th class="text-center" >{{ new Date(item.create_at * 1000).toLocaleString() }}</th>
            <th class="text-center p-5">
              {{ item.is_paid ? '已付款' : '未付款' }}
            </th>
            <th class="text-center">NT$ {{ item.total }}</th>
            <!-- <th class="text-center">{{  }}</th> -->
            <!-- <th class="py-4">
              <button type="button" class="btn btn-primary">
                <span class="p-2">
                  取消訂單
                </span>
              </button>
            </th> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import orderStore from '../stores/orderStore'

export default {
  methods: {
    ...mapActions(orderStore, ['getOrders'])
  },
  computed: {
    ...mapState(orderStore, ['userOrders', 'isLoading'])
  },
  mounted () {
    this.getOrders()
  }
}
</script>

<style>
.orderId_hover {
  color: #7e2a03;
  text-decoration: underline;
}
.orderId_hover:hover {
  color: #EC6933;
}
.overflow-x {
  overflow-x: auto;
}
.overflow-x::-webkit-scrollbar {
  display: none;
}
</style>
