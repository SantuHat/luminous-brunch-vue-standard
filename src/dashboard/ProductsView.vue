<template>
<LoadingView :active="isLoading"></LoadingView>
<div class="container-fluid">
  <div class="text-end me-3 mt-4 ">
      <button class="btn btn-primary" type="button" @click="openModal(true)">產品新增</button>
  </div>
  <table class="table mt-4 ">
      <thead>
          <tr>
              <th width="120">分類</th>
              <th width="120">產品名稱</th>
              <th width="120">原價</th>
              <th width="120">售價</th>
              <th width="100">是否啟用</th>
              <th width="200">編輯</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{item.category}}</td>
            <td>{{item.title}}</td>
            <td class="text-right">
              {{item.origin_price}}
            </td>
            <td class="text-right">
              {{item.price}}
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
  <ProductModal ref="productModal" :product="temProduct" @update-product="updateProduct"></ProductModal>
  <DelModal :item="temProduct" ref="delModal" @del-item="dleProduct"></DelModal>
  <PaginationView :pagination="pages" @emit-pages="getProducts"></PaginationView>
</div>
</template>
<script>
import ProductModal from '../components/backComponents/ProductsModal.vue'
import DelModal from '../components/backComponents/DelModal.vue'
import PaginationView from '../components/backComponents/PaginationView.vue'

const { VITE_API, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      temProduct: {},
      pages: {},
      isNew: false,
      isLoading: false
    }
  },
  components: {
    ProductModal,
    DelModal,
    PaginationView
  },
  inject: ['emitter'],
  methods: {
    getProducts (page = 1) { // 參數預設值
      const url = `${VITE_API}api/${VITE_PATH}/admin/products?page=${page}`
      this.isLoading = true
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false
          this.products = res.data.products
          this.pages = res.data.pagination
          console.log(res)
        })
    },
    updateProduct () {
      const hidemodal = this.$refs.productModal
      // 新增
      // this.temProduct = item
      let api = `${VITE_API}api/${VITE_PATH}/admin/product`
      let method = 'post'
      // 更新
      if (!this.isNew) {
        api = `${VITE_API}api/${VITE_PATH}/admin/product/${this.temProduct.id}`
        method = 'put'
      }
      this.$http[method](api, { data: this.temProduct })
        .then((res) => {
          // this.getProducts();
          hidemodal.hideModal()
          this.temProduct = {}
          this.$httpMessageState(res, '更新')
          this.getProducts()
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    dleProduct () {
      const url = `${VITE_API}api/${VITE_PATH}/admin/product/${this.temProduct.id}`
      this.$http.delete(url)
        .then(() => {
          this.getProducts()
          const delComponent = this.$refs.delModal
          delComponent.hideModal()
        })
    },
    // 驗證是否登入(未登入跳轉至登入頁面)
    check () {
      const url = `${VITE_API}api/user/check`
      this.$http.post(url)
        .then((res) => {
          if (!res.data.success) {
            window.location = 'login.html'
          }
        })
        .catch(() => {
          window.location = 'login.html'
        })
    },
    openModal (isNew, item) {
      console.log(isNew, item)
      if (isNew) {
        this.temProduct = {}
      } else {
        this.temProduct = { ...item }
      }
      this.isNew = isNew
      const openModal = this.$refs.productModal
      openModal.showModal()
    },
    openDelModal (item) {
      this.temProduct = { ...item }
      const delModal = this.$refs.delModal
      delModal.showModal()
    }
  },
  mounted () {
    // 驗證登入
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    //   this.myModal = new bootstrap.Modal(this.$refs.productModal);
    //   this.modalDel = new bootstrap.Modal(this.$refs.delProductModal);
    this.getProducts()
  }
}
</script>
