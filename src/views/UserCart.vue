<template>
<div class="container mb-11">
  <LoadingView :active="isLoading" />
  <div class="step-indicator mx-auto mt-5">
    <div class="step active" id="step1"><span class="fs-4">確認訂單</span></div>
    <div class="line"></div>
    <div class="step" :class="{'active': step === 2 || step === 3}" id="step2"><span class="fs-4">填寫資料</span></div>
    <div class="line"></div>
    <div class="step" :class="{'active': step === 3}" id="step3"><span class="fs-4">完成訂單</span></div>
  </div>
</div>
<!-- table -->
<h2 v-if="step === 3" class="text-center mb-7">感謝您的訂餐，此筆訂單已成立!</h2>
<h3 v-if="step === 3" class="text-center mb-7">訂單編號:</h3>
<h3 v-if="step === 2 || step === 3" class="mb-3 mt-12 text-center text-gray-400 font-NotoSerif">訂餐明細</h3>
<div class="container mt-5 mb-9">
    <table class="border border-gray box-shadow-gray-300 mx-auto w-100">
      <thead class="bg-gray text-center">
        <tr>
          <th class="px-lg-6 py-lg-4" colspan="2">商品</th>
          <th class="px-lg-6 py-lg-4">單價</th>
          <th class="px-lg-6 py-lg-4">數量</th>
          <th class="px-lg-6 py-lg-4">小計</th>
          <th class="px-lg-6 py-lg-4"></th>
          <th class="px-lg-6 py-lg-4">總金額</th>
        </tr>
      </thead>
      <tbody class="position-relative">
        <div class="position-absolute js-tbody">{{ final_total }}</div>
        <tr v-for="(item) in carts" :key="item.product_id">
          <th width="12%">
            <img
              :src="item.product.imageUrl"
              class="me-2 toast-img" :alt="item.product.imageUrl">
          </th>
          <th>{{ item.product.title }}</th>
          <th class="text-center" >{{ item.product.price }}</th>
          <th class="text-center">
            <button v-if="step === 1" class="btn" type="button">-</button>
            {{ item.qty }}
            <button v-if="step === 1" class="btn" type="button">+</button>
          </th>
          <th class="text-center">{{ item.total }}</th>
          <th>
            <button v-if="step === 1" @click="delCart(item.id)" type="button" class="btn btn-primary">
              <span class="material-symbols-outlined pt-1">
                delete
              </span>
            </button>
          </th>
        </tr>
      </tbody>
    </table>

  <!-- 訂餐人資料 -->
  <h3 v-if="step === 2 || step === 3" class="mb-7 mt-10 text-center text-gray-400 font-NotoSerif">訂餐人資料</h3>
  <table v-if="step === 2 || step === 3" class="border border-gray box-shadow-gray-300 mx-auto w-100">
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
          <input type="text" placeholder="姓名" class="bg-transparent py-2 text-center" :class="{'border-0': step === 3}" :disabled="step === 3">
        </th>
        <th class="text-center p-5">
          <input type="text" placeholder="0911345678" class="bg-transparent py-2 text-center" :class="{'border-0': step === 3}" :disabled="step === 3">
        </th>
        <th class="text-center p-5">
          <input type="text" placeholder="abc@gmail.com" class="bg-transparent py-2 text-center" :class="{'border-0': step === 3}" :disabled="step === 3">
        </th>
      </tr>
    </tbody>
  </table>

  <!-- 付款方式 -->
  <h3 v-if="step === 2 || step === 3" class="mb-5 mt-10 text-center text-gray-400 font-NotoSerif">付款方式</h3>
  <select v-if="step === 2 || step === 3" name="" id="" class="bg-transparent p-2 mx-auto d-block" :disabled="step === 3">
    <option value="請選擇">請選擇</option>
    <option value="到店取餐付款">到店取餐付款</option>
    <option value="信用卡">信用卡</option>
  </select>

  <a v-if="step === 1" href="javascript:;" class="btn_reserve py-3 px-9 py-md-4 px-md-11 mx-auto mt-10 mb-8" @click="nextStep(2)">下一步</a>
  <a v-if="step === 2" href="javascript:;" class="btn_reserve py-3 px-9 py-md-4 px-md-11 mx-auto mt-10 mb-8" @click="nextStep(3)">送出訂單</a>

  <div class="d-flex">
    <RouterLink @click="scrollTo" to="/" v-if="step === 3" class="btn_reserve py-3 px-5 py-md-4 px-md-11 mx-auto mt-10 mb-8">回首頁</RouterLink>
    <RouterLink to="/userorders" v-if="step === 3" class="btn_reserve py-3 px-5 py-md-4 px-md-11 mx-auto mt-10 mb-8">查看我的所有訂單</RouterLink>
  </div>
</div>
</template>

<script>

const { VITE_API, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      carts: [],
      final_total: 0,
      step: 1,
      isLoading: false
    }
  },
  methods: {
    getCarts () {
      const url = `${VITE_API}/api/${VITE_PATH}/cart`
      this.isLoading = true
      this.$http.get(url)
        .then((res) => {
          const { carts, total } = res.data.data
          this.carts = carts
          this.final_total = total
          // console.log(carts, total)
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
          this.isLoading = false
        })
    },
    delCart (id) {
      const url = `${VITE_API}/api/${VITE_PATH}/cart/${id}`
      this.isLoading = true
      this.$http.delete(url)
        .then(() => {
          this.isLoading = false
          this.getCarts()
        })
        .catch((err) => {
          console.log(err)
          this.isLoading = false
        })
    },
    nextStep (val) {
      this.step = val
      window.scrollTo(0, 0)
    },
    scrollTo () {
      window.scrollTo(0, 0)
    }
  },
  mounted () {
    this.getCarts()
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
  .line {
    height: 2px;
    width: 48%;
    background-color: #693b28;
  }
  .step {
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
    span {
      width: 21vmin;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      margin-top: 12vh;
    }
  }
  .step.active {
    background-color: #693b28;
    color: #343434;
  }
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
  .booking-Contents {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
  top: 1%;
  font-weight: bold;
}
.box-shadow-gray-300 {
  box-shadow: 1px 1px 3px #8B8B8B;
}
.overflow-x {
  overflow-x: auto;
}
</style>
