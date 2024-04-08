<template>
  <LoadingView :active="isLoading" />

  <div class="container font-color-gray-400">
    <div class="row mt-8 mb-8">
      <div class="col-md-3">
        <h4 class="text-center fw-bold font-NotoSerif list-title my-9 d-md-none d-none">最新消息</h4>
        <!-- <h3 class="text-center fw-bold font-NotoSerif list-title my-5 d-md-block ">最新消息</h3> -->
        <NewSidebar :articles="articles" @hideOffcanvas="getArticleId" >
        </NewSidebar>
      </div>
    <div class="col-md-9">
      <div class="bg-pink px-4">
        <div class="font-NotoSerif mb-5 d-flex align-items-center">
          <!-- <RouterLink to="/newsmain" class="d-flex align-items-center mt-4 ms-0">
            <img src="/Keyboard arrow left.png" alt="返回列表"/>
            <span>返回列表</span>
          </RouterLink> -->
        </div>
        <div class="d-flex news-title justify-content-center align-items-center my-8">
          <h2 class="font-NotoSerif fw-bold">{{ tempArticle.title }}</h2 >
        </div>
        <div class="d-flex justify-content-center news-content-pic mb-5">
          <img :src="tempArticle.image" width="75%" :style="byStyle" :alt="tempArticle.title"/>
        </div>
        <div class="news-text lh-base d-flex justify-content-center w-75 mx-auto">
          <p class="font-sans-serif">
            {{ tempArticle.description }}
          </p>
        </div>
      </div>
    </div>
    </div>
  </div>

  <FooterView></FooterView>
</template>

<script>
import NewSidebar from '../components/NewSidebar.vue'
import FooterView from '../components/FooterView.vue'
const { VITE_API, VITE_PATH } = import.meta.env

export default {
  components: { NewSidebar, FooterView },
  data () {
    return {
      isLoading: false,
      articles: [],
      tempArticle: {},
      byStyle: {
        transition: 'all 2s ease',
        opacity: '0'
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.byStyle.opacity = '1'
    }, 300)
    this.getArticles()
  },
  methods: {
    getArticleId (item) {
      this.tempArticle = item
    },
    getArticles () {
      this.isLoading = true
      const url = `${VITE_API}api/${VITE_PATH}/articles`
      this.$http.get(url)
        .then((res) => {
          this.articles = res.data.articles
          this.getArticleId(this.articles[0])
          this.isLoading = false
        })
        .catch((err) => {
          alert(err)
        })
    }
  }
}
</script>

  <style>
body {
  position:relative
}
.row .col-4 .list-group {
  text-align: center;
  font-family: "Noto Serif TC", "san-serif";
  font-size: 3vmin;
}
.row .col-4 .list-group .list-title {
  font-weight: bold;
  font-size: 4vmin;
}
.row .col-8 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
}
.row .col-8 .return-to-list {
  font-size: 1vw;
}
.row .col-8 .news-title {
  border-radius: 1vw;
  text-align: center;
  font-family: "Noto Serif TC", "san-serif";
  padding: 1vmin;
  background-color: #fdf8f4;
  font-weight: bold;
  font-size: 4vmin;
  padding-top: 1vh;
  padding-bottom: 0vh;
}
.row .col-8 .news-text {
  margin: 1vh;
  padding-top: 3vh;
  font-family: "Noto Serif TC", "san-serif";
  font-size: 16px;
  width: 70%;
}
.row .col-8 .news-content-pic {
  align-items: center;
  -o-object-fit: cover;
     object-fit: cover;
}
  </style>
