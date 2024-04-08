<template>
<div class="container mb-11">
  <LoadingView :active="isLoading" />
  <div class="step-indicator mx-auto mt-5">
    <div class="step active" id="step1"><span>確認訂單</span></div>
    <div class="line"></div>
    <div class="step" :class="{'active': step === 2 || step === 3}" id="step2"><span>填寫資料</span></div>
    <div class="line"></div>
    <div class="step" :class="{'active': step === 3}" id="step3"><span>完成訂單</span></div>
  </div>
</div>

<div v-if="step === 3" class="frame col-11 col-md-7 col-lg-5 mx-auto mb-7" >
  <h2 v-if="step === 3" class="text-center mb-7 mt-5 orderResult fw-bold">感謝您的訂餐</h2>
  <h2 v-if="step === 3" class="text-center mb-7 orderResult fw-bold">此筆訂單已成立!</h2>
  <h3 v-if="step === 3" class="text-center mb-7 orderResult fw-bold text-gray-300 fs-6">訂單編號: {{ orderId }}</h3>
</div>
  <h3 v-if="step === 2 || step === 3" class="mb-3 mt-3 text-center text-gray-400 orderResult">訂餐明細</h3>
<div class="container mt-5 mb-9" v-if="carts.length ===0 && step === 1">
  <UserCartEmptyData></UserCartEmptyData>
</div>
<div class="container mt-5 mb-9" v-else>
    <div class="area-loading">
      <div class="area-loading-wrap" v-if="isAreaLoading">
        <LoadingSpinner :scale="0.5"></LoadingSpinner>
      </div>
      <MealList :class="{invisible: isAreaLoading}" :step="step" :list="step === 3 ? orderItem : carts" :total="step === 3 ? orderTotal : final_total"></MealList>
    </div>

    <!-- 付款方式 -->
    <h3 v-if="step === 2 || step === 3" class="mb-5 mt-10 text-center text-gray-400 orderResult"><span class="text-danger me-1 align-middle">*</span>付款方式</h3>
  <VForm v-if="step === 2 || step === 3" v-slot="{ errors }" @submit="handleOrderSubmit()" >
    <div class="col-11 col-md-4 mx-auto">
      <VField v-if="step === 2 || step === 3" name="付款方式" id="付款方式" class="bg-transparent p-2 form-control d-block rounded text-center cursor-pointer" :disabled="step === 3"
      :class="{ 'is-invalid': errors['付款方式'] }"
      rules="required"
      as="select"
      >
        <option value="" selected>請選擇</option>
        <option value="到店取餐付款" >到店取餐付款</option>
        <option value="信用卡" >信用卡</option>
      </VField>
      <ErrorMessage name="付款方式" class="invalid-feedback"></ErrorMessage>
    </div>
    <!-- 訂餐人資料 -->
    <h3 v-if="step === 2 || step === 3" class="mb-5 mt-10 text-center text-gray-400 orderResult">訂餐人資料</h3>
    <div class="container">
      <div class="row order-data d-flex align-items-center" style="flex-direction: column">
        <div class="col-md-4 mb-2">
          <label for="name" class="sr-only text-primary py-3"
            ><span class="text-danger me-1 align-middle">*</span>姓名</label
          >
          <VField
            type="text"
            id="name"
            name="姓名"
            class="form-control w-100"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            autofocus
            v-model="userData.data.user.name"
            :disabled="step === 3"
          ></VField>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="col-md-4 mb-2">
          <label for="orderTel" class="sr-only text-primary py-3"
            ><span class="text-danger me-1 align-middle">*</span>電話</label
          >
          <VField
            type="text"
            id="orderTel"
            name="電話"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            rules="required|numeric|min:10|max:10"
            autofocus
            v-model="userData.data.user.tel"
            :disabled="step === 3"
          ></VField>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="col-md-4 mb-4">
          <label for="orderEmail" class="sr-only text-primary py-3"
            ><span class="text-danger me-1 align-middle">*</span>信箱</label
          >
          <VField
            type="email"
            name="email"
            id="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="abc@gmail.com"
            rules="email|required"
            autofocus
            v-model="userData.data.user.email"
            :disabled="step === 3"
          ></VField>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>
      </div>
      <div v-if="step === 2" class="btn-box d-flex">
        <a href="javascript:;" class="btn_reserve py-3 px-6 py-md-4 px-md-11 mx-auto mt-10 mb-8" @click="nextStep(1)">上一步</a>
        <button class="btn_reserve py-3 px-6 py-md-4 px-md-11 mx-auto mt-10 mb-8">送出訂單</button>
      </div>
    </div>
  </VForm>

  <a v-if="step === 1" href="javascript:;" class="btn_reserve py-3 px-9 py-md-4 px-md-11 mx-auto mt-10 mb-8" @click="nextStep(2)">下一步</a>

  <div class="d-flex">
    <RouterLink @click="scrollTo" :to="`/menuview/menulist?category=salad`" v-if="step === 3" class="btn_reserve py-3 px-5 py-md-4 px-md-11 mx-auto mt-10 mb-8">繼續購物</RouterLink>
    <RouterLink to="/userorders" v-if="step === 3" class="btn_reserve py-3 px-5 py-md-4 px-md-11 mx-auto mt-10 mb-8">查看我的所有訂單</RouterLink>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from 'pinia'
import orderStore from '../stores/orderStore'
import cartStore from '../stores/cartStore'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import UserCartEmptyData from '../components/UserCartEmptyData.vue'
import MealList from '../components/MealList.vue'

const { VITE_API, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      totalPrice: 0,
      step: 1,
      userData: {
        data: {
          user: {
            name: '',
            email: '',
            tel: '',
            address: '高雄市'
          }
        }
      },
      orderId: '',
      // obj: { choose: '請選擇' },
      orderTotal: 0
    }
  },
  // watch: {
  //   'obj.choose': function () {
  //     if (this.$refs.到店取餐付款) {
  //       this.$refs.phone.innerHTML = ''
  //     } else if (this.$refs.信用卡) {
  //       this.$refs.phone.innerHTML = ''
  //     }
  //   }
  // },
  methods: {
    ...mapActions(orderStore, ['getOrders', 'getOrderItem']),
    ...mapActions(cartStore, ['getCarts', 'setIsLoading']),
    scrollTo () {
      window.scrollTo(0, 0)
    },
    nextStep (val) {
      this.setIsLoading(true)
      this.step = val
      window.scrollTo(0, 0)
      setTimeout(() => { this.setIsLoading(false) }, 500)
    },
    postOrder () {
      const url = `${VITE_API}/api/${VITE_PATH}/order`
      axios.post(url, this.userData)
        .then((res) => {
          this.orderId = res.data.orderId
          this.orderTotal = res.data.total
          this.getCarts()
          this.getOrderItem(this.orderId)
        })
        .catch((err) => {
          alert(err)
        })
    },
    handleOrderSubmit () {
      this.nextStep(3)
      this.postOrder()
    }
  },
  computed: {
    ...mapState(orderStore, ['userOrders', 'orderItem', 'orderTotal']),
    ...mapState(cartStore, ['carts', 'final_total', 'isAreaLoading', 'isLoading'])
  },
  mounted () {
    this.getOrders()
    this.getCarts()
  },
  components: {
    LoadingSpinner,
    UserCartEmptyData,
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

.order-data {
  border: 2px solid var(--bs-gray);
}

.overflow-x {
  overflow-x: auto;
}

/* 移除 disabled 按鈕的邊框 */
button[disabled] {
  border: 0;
}
.imgOrder {
  width: 100px;
  height: 100px;
  /* max-width: 100%; */
  /* max-height: 200px; */
}
.delBtn {
  font-size: 16px;
  padding: 4px;
}
.form-control:disabled {
  background-color:inherit
}
.orderResult {
  font-size: 24px;
  @media(max-width: 992px){
    font-size: 20px;
  }
}
.cursor-pointer {
  cursor: pointer
}
.frame {
  border: 2px solid #EDE7DD;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  /* width:50%;
  position: relative;
  left: 400px; */
}
/* @media (max-width:992px){
  .frame{
    border: 2px solid #EDE7DD;
    width:auto;
    margin-left: 10px;
    margin-right: 10px;
    position:relative;
    left: 0px;
  }
} */
</style>
