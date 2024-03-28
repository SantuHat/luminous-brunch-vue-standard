<template>
  <LoadingView :active="isLoading" />
  <div class="container bg-pink  font-color-gray-400">
    <div class="row mt-8 mb-8">
      <div class="col-3">
        <h4 class="text-center fw-bold font-NotoSerif list-title my-5">最新消息</h4>
        <NewSidebar :articles="articles" :getArticleId="getArticleId" >
        </NewSidebar>
        <!-- <div
          id="list-example" class="list-group"
        >
        <div
          v-for="item in articles"
          :key="item.id"
        >
        <RouterLink
          :to="`/newscontainer/newsarticle`"
          class="list-group-item"
          @click="getArticleId(item)"
        >
          {{ item.title }}
        </RouterLink>
        </div>
      </div> -->
      </div>
<div
  class="col-9"
>
  <div class="font-NotoSerif mb-5 d-flex align-items-center">
    <RouterLink to="/newsmain" class="d-flex align-items-center mt-4">
      <img src="/Keyboard arrow left.png" alt="返回列表"/>
      <span>返回列表</span>
    </RouterLink>
  </div>
  <div class="news-title text-center">
    <h2 class="font-NotoSerif fw-bold">{{ tempArticle.title }}</h2 >
  </div>
  <br /><br />
  <div class="d-flex justify-content-center news-content-pic mb-5">
    <img :src="tempArticle.image" width="70%" :style="byStyle" :alt="tempArticle.title"/>
  </div>
  <div class="news-text lh-base d-flex justify-content-center">
    <p>
      {{ tempArticle.description }}
    </p>
  </div>
  </div>
      </div>
  </div>
</template>

<script>
import NewSidebar from '../components/NewSidebar.vue'
const { VITE_API, VITE_PATH } = import.meta.env

export default {
  components: { NewSidebar },
  data () {
    return {
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
          console.log(err)
        })
    }
  }
}
</script>

  <style>
  .row {
      .col-4 {
        .list-group {
          text-align: center;
          font-family: 'Noto Serif TC', 'san-serif';
          font-size: 3vmin;
          .list-title {
            font-weight: bold;
            font-size: 4vmin;
          }
        }
      }
      .col-8 {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;
        align-content: center;
        .return-to-list {
          font-size: 1vw;
        }
        .news-title {
          border-radius: 1vw;
          text-align: center;
          font-family: 'Noto Serif TC', 'san-serif';
          padding: 1vmin;
          background-color: #fdf8f4;
          font-weight: bold;
          font-size: 4vmin;
          padding-top: 1vh;
          padding-bottom: 0vh;
        }
        .news-text {
          margin: 1vh;
          padding-top: 3vh;
          font-family: 'Noto Serif TC', 'san-serif';
          font-size: 16px;
        }
        .news-content-pic {
          align-items: center;
          object-fit: cover;
        }
      }
    }
  </style>
