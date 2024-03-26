<template>
  <!-- <LoadIng :active="isLoading"></LoadIng> -->
<div class="container-fluid">
    <div class="text-end me-3 mt-4">
      <button class="btn btn-primary" type="button" @click="openModal(true)">新增文章</button>
  </div>
  <table class="table mt-4 mx-auto">
      <thead>
          <tr>
              <th width="120">文章標題</th>
              <th width="120">作者</th>
              <th width="120">建立日期</th>
              <th width="100">是否啟用</th>
              <th width="200">編輯</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="item in articles" :key="item.id">
            <td>{{ item.title }}</td>
            <td>{{ item.author }}</td>
            <td class="text-right">
              {{ item.create_at }}
            </td>
            <td>
              <span
                v-if="item.isPublic === true"
                class="text-success" >啟用</span>
              <span
                v-else
                class="text-muted">未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal(false, item)"
                >編輯</button>
                <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
              </div>
            </td>
          </tr>
        </tbody>
  </table>
</div>
<delModal
  :item="article"
  :tempArticle="article"
></delModal>
<ArticleModal
  ref="ArticleModal"
  :tempArticle="article"
  :status="isNew"
>
</ArticleModal>
</template>

<script>
import delModal from '../components/backComponents/DelModal.vue'
import ArticleModal from '../components/backComponents/ArticleModal.vue'
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  components: {
    delModal,
    ArticleModal
  },
  data () {
    return {
      articles: [],
      article: {},
      isNew: '',
      isLoading: false
    }
  },
  mounted () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    this.getArticles()
  },
  methods: {
    getArticles () {
      this.$http.get(`${VITE_API}api/${VITE_PATH}/admin/articles`)
        .then((res) => {
          console.log(res)
          this.articles = res.data.articles
          console.log(this.articles)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    openDelModal (item) {
      const url = `${VITE_API}api/${VITE_PATH}/admin/product/${item.id}`
      this.$http.delete(url)
        .then(() => {
          this.getProducts()
          const delComponent = this.$refs.delModal
          delComponent.hideModal()
        })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.article = {}
      } else {
        this.article = { ...item }
      }
      this.isNew = isNew
      this.$refs.ArticleModal.showModal()
    },
    hideModal () {
      this.$refs.ArticleModal.hideModal()
    }
  }
}
</script>
