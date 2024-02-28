<template>
<HeaderView/>
<div class="container mb-9">
  <div class="step-indicator mx-auto mt-5">
    <div class="step active" id="step1"><span class="fs-4">確認訂單</span></div>
    <div class="line"></div>
    <div class="step" :class="{'active': step === 2 || step === 3}" id="step2"><span class="fs-4">填寫資料</span></div>
    <div class="line"></div>
    <div class="step" :class="{'active': step === 3}" id="step3"><span class="fs-4">完成訂單</span></div>
  </div>
</div>
<!-- table -->
<div class="container mt-9 mb-9">
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
            <span class="material-symbols-outlined">
              delete
            </span>
          </button>
        </th>
      </tr>
    </tbody>
  </table>

  <a v-if="step === 1" href="javascript:;" class="btn_reserve py-3 px-9 py-md-4 px-md-11 mx-auto mt-10" @click="nextStep(2)">下一步</a>
  <a v-if="step === 2" href="javascript:;" class="btn_reserve py-3 px-9 py-md-4 px-md-11 mx-auto mt-10" @click="nextStep(3)">送出訂單</a>
</div>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'

const { VITE_API, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      carts: [],
      final_total: 0,
      step: 1
    }
  },
  methods: {
    getCarts () {
      const url = `${VITE_API}/api/${VITE_PATH}/cart`
      this.$http.get(url)
        .then((res) => {
          const { carts, total } = res.data.data
          this.carts = carts
          this.final_total = total
        // console.log(carts, total)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    delCart (id) {
      const url = `${VITE_API}/api/${VITE_PATH}/cart/${id}`
      this.$http.delete(url)
        .then(() => {
          alert('已刪除該品項')
          this.getCarts()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    nextStep (val) {
      this.step = val
    }
  },
  mounted () {
    this.getCarts()
  },
  components: {
    HeaderView
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
</style>
