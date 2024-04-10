<template>
<!-- table -->
<div class="container my-7">
  <div class="frame col-md-6 mx-auto">
    <h3 class="text-center mt-7 mb-4 font-sans-serif fw-bold fs-6">訂單編號</h3>
    <h4 class="text-center mb-7 font-sans-serif text-gray-300 orderNum">{{ $route.query.orderId }}</h4>
  </div>
</div>
<h3 class="mt-12 text-center text-gray-400 font-sans-serif fw-bold fs-6">訂餐明細</h3>
<div class="container pt-2 pb-5">
  <!-- 完成訂單的訂餐明細 orderItem -->
  <MealList :step="3" :list="orderItem" :total="orderTotal"></MealList>

  <!-- 訂餐人資料 -->
  <h3 class="mb-5 mt-10 text-center text-gray-400 font-sans-serif fw-bold fs-6">訂餐人資料</h3>
    <div class="col-md-6 mx-auto order-data mb-3 font-sans-serif px-3">
        <div class=" mb-2">
          <label for="name" class="sr-only text-primary py-3"
            >姓名</label
          >
          <p>{{ userData.name }}</p>
        </div>
        <div class=" mb-2">
          <label for="orderTel" class="sr-only text-primary py-3"
            >電話</label
          >
          <p>{{ userData.tel }}</p>
        </div>
        <div class=" mb-4">
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
.frame {
  border: 1px solid #EDE7DD;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}
.orderNum {
  font-size: 18px;
}
@media(max-width: 576px){
  .orderNum {
    font-size: 16px;
  }
}
</style>
