<template>
<!-- table -->
<h3 class="text-center mt-7 mb-2">訂單編號</h3>
<h3 class="text-center mb-7">{{ $route.query.orderId }}</h3>
<h3 class="mb-3 mt-12 text-center text-gray-400">訂餐明細</h3>
<div class="container py-5">
  <!-- 完成訂單的訂餐明細 orderItem -->
  <MealList :step="3" :list="orderItem" :total="orderTotal"></MealList>

  <!-- 訂餐人資料 -->
  <h3 class="mb-7 mt-10 text-center text-gray-400">訂餐人資料</h3>
  <!-- <div class="overflow-x">
    <table class="border border-gray box-shadow-gray-300 mx-auto w-100">
      <thead class="bg-gray text-center">
        <tr>
          <th class="px-lg-6 py-lg-4">姓名</th>
          <th class="px-lg-6 py-lg-4">手機號碼</th>
          <th class="px-lg-6 py-lg-4">信箱</th>
        </tr>
      </thead>
      <tbody class="js-tbody">
        <tr>
          <th class="text-center p-5">
            <input v-model="userData.name" type="text" placeholder="姓名" class="bg-transparent py-2 text-center border-0" disabled>
          </th>
          <th class="text-center p-5">
            <input v-model="userData.tel" type="text" placeholder="0911345678" class="bg-transparent py-2 text-center border-0" disabled>
          </th>
          <th class="text-center p-5">
            <input v-model="userData.email" type="text" placeholder="abc@gmail.com" class="bg-transparent py-2 text-center border-0" disabled>
          </th>
        </tr>
      </tbody>
    </table>
  </div> -->
  <div class="row order-data mb-3">
        <div class="col-md-4 mb-2">
          <label for="name" class="sr-only text-primary py-3"
            >姓名</label
          >
          <p>{{ userData.name }}</p>
        </div>
        <div class="col-md-4 mb-2">
          <label for="orderTel" class="sr-only text-primary py-3"
            >電話</label
          >
          <p>{{ userData.tel }}</p>
        </div>
        <div class="col-md-4 mb-4">
          <label for="orderEmail" class="sr-only text-primary py-3"
            >信箱</label
          >
          <p>{{ userData.email }}</p>
        </div>
      </div>

</div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import orderStore from '../stores/orderStore'
import MealList from '../components/MealList.vue'

export default {
  methods: {
    ...mapActions(orderStore, ['getOrderItem'])
  },
  computed: {
    ...mapState(orderStore, ['userOrders', 'userData', 'orderItem', 'orderTotal'])
  },
  mounted () {
    this.getOrderItem(this.$route.query.orderId)
  },
  components: {
    MealList
  }
}
</script>

<style>
.time-picker {
  width: 49%;
}

.form-text {
  display: flex;
}

.act-btn {
  font-size: 3vmin;
}

.step-indicator {
  display: flex;
  justify-content: space-between;
  width: 80%;
  position: relative;
  align-items: center;
  height: 10vmin;
}
.step-indicator .line {
  height: 2px;
  width: 48%;
  background-color: #693b28;
}
.step-indicator .step {
  width: 5vmin;
  height: 5vmin;
  background-color: #f4e9e2;
  color: #8b8b8b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-direction: column;
}
.step-indicator .step span {
  width: 21vmin;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-top: 12vh;
}
.step-indicator .step.active {
  background-color: #693b28;
  color: #343434;
}

.confirm-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 5vmin;
}

.form-content-confirm {
  display: flex;
  flex-direction: column;
  font-size: 5vmin;
}
.form-content-confirm .booking-Contents {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-btn {
  width: 8vw;
}

.form-btn-group {
  display: flex;
  justify-content: space-evenly;
}

.js-tbody {
  right: 5%;
  top: 15%;
  font-weight: bold;
  font-size: 20px;
}

.box-shadow-gray-300 {
  box-shadow: 1px 1px 3px #8B8B8B;
}

.overflow-x {
  overflow-x: auto;
}

/* 移除 disabled 按鈕的邊框 */
button[disabled] {
  border: 0;
}
.order-data {
  border: 2px solid var(--bs-gray);
  margin-right: 0;
  margin-left: 0;
}
</style>
