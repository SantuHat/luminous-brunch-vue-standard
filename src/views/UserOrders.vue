<template>
  <LoadingView :active="isLoading" />
  <HeaderView/>
  <div class="container">
    <h2 class="text-center mb-5">訂單資訊</h2>
    <table class="border border-gray box-shadow-gray-300 mx-auto w-100">
      <thead class="bg-gray text-center">
        <tr>
          <th class="px-lg-6 py-lg-4" colspan="2">訂單編號</th>
          <th class="px-lg-6 py-lg-4">訂單日期</th>
          <th class="px-lg-6 py-lg-4">付款狀態</th>
          <th class="px-lg-6 py-lg-4">訂單狀態</th>
          <th class="px-lg-6 py-lg-4">訂單金額</th>
          <th class="px-lg-6 py-lg-4"></th>
        </tr>
      </thead>
      <tbody class="position-relative">
        <tr>
          <th width="12%">
          </th>
          <th>{{  }}</th>
          <th class="text-center" >{{  }}</th>
          <th class="text-center">
            {{  }}
          </th>
          <th class="text-center">{{  }}</th>
          <th class="text-center">{{  }}</th>
          <th>
            <button type="button" class="btn btn-primary">
              <span class="p-2">
                取消訂單
              </span>
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HeaderView from '../components/HeaderView.vue'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      orders: [],
      isLoading: false
    }
  },
  methods: {
    getUserOrders () {
      const api = `${VITE_API}/api/${VITE_PATH}/orders`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false
          console.log(res.data)
        })
        .catch((err) => {
          this.isLoading = false
          console.log(err)
        })
    }
  },
  mounted () {
    this.getUserOrders()
  },
  components: {
    HeaderView
  }
}
</script>
