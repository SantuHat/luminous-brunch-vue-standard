<template>
  <div
    class="modal fade"
    id="articleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="articleModal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">文章編輯</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">輸入圖片網址</label>
                  <input
                    type="text" class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="editArticle.image"
                  >
                </div>
                <img class="img-fluid" :src="editArticle.image" alt="">
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label">或 上傳圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <input type="file" id="customFile" class="form-control" ref="fileInput" @change="uploadFile">
              </div>
              <div>
                <button class="btn btn-outline-primary btn-sm d-block w-100">
                  新增圖片
                </button>
              </div>
              <div>
                <button class="btn btn-outline-danger btn-sm d-block w-100 mt-2">
                  刪除圖片
                </button>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model="editArticle.title">
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">作者</label>
                  <input id="category" type="text" class="form-control" v-model="editArticle.author"
                          placeholder="請輸入作者">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">標籤</label>
                  <input id="unit" type="text" class="form-control" v-model="editArticle.tag" placeholder="請輸入標籤">
                </div>
              </div>
              <hr>

              <div class="mb-3">
                <label for="description" class="form-label">文章內容</label>
                <textarea id="description" type="text" class="form-control" v-model="editArticle.description"
                          placeholder="請輸入文章內容">
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea id="description" type="text" class="form-control" v-model="editArticle.content"
                placeholder="請輸入說明內容">
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input id="is_enabled" class="form-check-input" type="checkbox"
                          :true-value="true" :false-value="false"
                          v-model="editArticle.isPublic">
                  <label class="form-check-label" for="is_enabled">是否公開</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="updateArticle"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
const { VITE_API, VITE_PATH } = import.meta.env

export default {
  props: ['tempArticle', 'status'],
  data () {
    return {
      ArticleModal: '',
      editArticle: {
        tag: ['']
      }
    }
  },
  watch: {
    tempArticle () {
      this.editArticle = this.tempArticle
    }
  },
  methods: {
    updateArticle () {
      this.editArticle.create_at = new Date().getTime()
      const url = `${VITE_API}api/${VITE_PATH}/admin/article`
      const postData = { data: this.editArticle }
      if (this.status) {
        this.$http.post(url, postData)
          .then((res) => {
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        this.$http.put(`${url}/${this.editArticle.id}`, postData)
          .then((res) => {
            // console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    showModal () {
      this.articleModal.show()
    },
    hideModal () {
      this.articleModal.hide()
    }
  },
  mounted () {
    this.articleModal = new Modal(this.$refs.articleModal)
    this.editArticle = this.tempArticle
  }
}
</script>
