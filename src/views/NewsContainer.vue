<template>
<div class="bg-pink">
  <div class="container  font-color-gray-400">
    <div class="row">
      <div class="col-3">
        <h5 class="text-center fw-bold font-NotoSerif list-title my-5">最新消息</h5>
        <div
          id="list-example" class="list-group"
        >
        <div
          v-for="item in articles"
          :key="item.id"
        >
        <RouterLink
          :to="`/newsContent/${item.id}`"
          class="list-group-item">
          {{ item.title }}
        </RouterLink>
        </div>
      </div>
      </div>
      <div class="col-9">
        <RouterView name="articleView"></RouterView>
      </div>
    </div>
  </div>
</div>
</template>

<script>
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      articles: []
    }
  },
  mounted () {
    this.getArticles()
    console.log(this.$route.params.id)
  },
  methods: {
    getArticles () {
      const url = `${VITE_API}api/${VITE_PATH}/articles`
      this.$http.get(url)
        .then((res) => {
          this.articles = res.data.articles
          console.log(this.articles)
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
