<template>
<LoadIng :active="isLoading"></LoadIng>
<div class="container-fluid">
    <div class="text-end me-3 mt-4">
      <button class="btn btn-primary" type="button" @click="openModal(true)">新增優惠券</button>
  </div>
  <table class="table mt-4 mx-auto">
      <thead>
          <tr>
              <th width="120">名稱</th>
              <th width="120">折扣百分比</th>
              <th width="120">到期日</th>
              <th width="100">是否啟用</th>
              <th width="200">編輯</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="item in coupon" :key="item.id">
            <td>{{ item.title }}</td>
            <td>{{item.percent}}%</td>
            <td class="text-right">
              {{ $filters.date(item.due_date) }}
            </td>
            <td>
              <span class="text-success" v-if="item.is_enabled">啟用</span>
              <span class="text-muted" v-else>未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button class="btn btn-outline-primary btn-sm" @click="openModal(false,item)">編輯</button>
                <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
              </div>
            </td>
          </tr>
        </tbody>
  </table>
</div>
<CouponModal ref="CouponModal" :coupon="temCoupons" @update-coupon="upCoupon"></CouponModal>
<delModal :item="temCoupons" ref="delModal" @del-item="dleProduct"></delModal>
<PaginationView :pagination="couponPages" @emit-pages="getCoupon"></PaginationView>
</template>
<script>
import CouponModal from '../components/backComponents/CouponModal.vue'
import delModal from '../components/backComponents/DelModal.vue'
import PaginationView from '../components/backComponents/PaginationView.vue'

const { VITE_API, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      coupon: [],
      couponPages: {},
      temCoupons: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      isNew: false,
      isLoading: false
    }
  },
  components: {
    CouponModal,
    delModal,
    PaginationView
  },
  methods: {
    getCoupon (page = 1) {
      const url = `${VITE_API}api/${VITE_PATH}/admin/coupons?page=${page}`
      this.isLoading = true
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false
          this.coupon = res.data.coupons
          this.couponPages = res.data.pagination
          console.log(res)
        })
    },
    upCoupon () {
      console.log(this.temCoupons)
      const hideModal = this.$refs.CouponModal
      // 新增
      let api = `${VITE_API}api/${VITE_PATH}/admin/coupon`
      let method = 'post'
      // 更新
      if (!this.isNew) {
        api = `${VITE_API}api/${VITE_PATH}/admin/coupon/${this.temCoupons.id}`
        method = 'put'
      }
      this.$http[method](api, { data: this.temCoupons })
        .then((res) => {
          console.log(res)
          this.$httpMessageState(res, '新增優惠券')
          this.getCoupon()
          // this.hideModal();
          hideModal.hideModal()
          this.temProduct = {}
        }).catch((err) => {
          console.log(err)
        })
    },
    dleProduct () {
      const url = `${VITE_API}api/${VITE_PATH}/admin/coupon/${this.temCoupons.id}`
      this.$http.delete(url)
        .then(() => {
          this.getCoupon()
          const delComponent = this.$refs.delModal
          delComponent.hideModal()
        })
    },
    openModal (isNew, item) {
      console.log(isNew, item)
      if (isNew) {
        this.temCoupons = { due_date: new Date().getTime() / 1000 }
      } else {
        this.temCoupons = { ...item }
      }
      this.isNew = isNew
      const openModal = this.$refs.CouponModal
      openModal.showModal()
    },
    openDelModal (item) {
      this.temCoupons = { ...item }
      const delModal = this.$refs.delModal
      delModal.showModal()
    }
  },
  mounted () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    this.getCoupon()
  }
}
</script>
