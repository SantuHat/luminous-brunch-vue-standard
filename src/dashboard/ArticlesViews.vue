<template>
<LoadingView :active="isLoading"></LoadingView>
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
  ref="delModal"
  :item="article"
  @del-item="delArticle"
></delModal>
<ArticleModal
  ref="ArticleModal"
  :tempArticle="article"
  @update-article="updateArticle"
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
      isNew: false,
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
      this.isLoading = true
      this.$http.get(`${VITE_API}api/${VITE_PATH}/admin/articles`)
        .then((res) => {
          console.log(res)
          this.articles = res.data.articles
          this.isLoading = false
          console.log(this.articles)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    updateArticle (editArticle) {
      this.editArticle.create_at = new Date().getTime()
      const url = `${VITE_API}api/${VITE_PATH}/admin/article`
      const postData = { data: editArticle }
      if (this.isNew) {
        this.$http.post(url, postData)
          .then((res) => {
            this.$refs.ArticleModal.hideModal()
            alert(res.data.message)
            this.getArticles()
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        console.log(this.editArticle)
        this.$http.put(`${url}/${this.editArticle.id}`, postData)
          .then((res) => {
            console.log(res)
            this.$refs.ArticleModal.hideModal()
            this.getArticles()
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    delArticle () {
      const url = `${VITE_API}api/${VITE_PATH}/admin/article/${this.article.id}`
      this.$http.delete(url)
        .then((res) => {
          console.log(res)
          this.$refs.delModal.hideModal()
          this.getArticles()
        })
    },
    openDelModal (item) {
      this.article = { ...item }
      this.$refs.delModal.showModal()
    },
    openModal (isNew, item) {
      if (isNew) {
        this.article = {}
      } else {
        this.article = { ...item }
        console.log(this.article)
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
