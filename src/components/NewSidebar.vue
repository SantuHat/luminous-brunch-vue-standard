<template>
  <div class="d-none d-md-block">
    <div id="list-example" class="list-group ">
      <div
      >
      <RouterLink
        v-for="item in articles"
        :key="item.id"
        :to="`/newscontainer/newsarticle/${item.id}`"
        class="list-group-item list-group-item-action text-center py-3"
        :exact="true"
        @click="getArticleId(item)"
      >
          {{ item.title }}
      </RouterLink>
      </div>
    </div>
  </div>
  <!-- 手機版 -->
    <button class="btn d-flex align-items-center position-sticky end-100 newsBtn-mobile d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
      文章列表
      <span class="material-symbols-outlined">
      double_arrow
      </span>
    </button>

<div ref="articlesOffcanvas" class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">最新消息</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div
    >
    <RouterLink
      v-for="item in articles"
      :key="item.id"
      :to="`/newscontainer/newsarticle/${item.id}`"
      class="list-group-item list-group-item-action py-3 border-bottom border-gray"
      :exact="true"
      @click="getArticleId(item)"
    >
    <!-- @click="getArticleId(item)" -->
        {{ item.title }}
    </RouterLink>
    </div>
  </div>
</div>

</template>

<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas'

export default {
  props: ['articles'],
  // , 'getArticleId'
  data () {
    return {
      articlesOffcanvas: ''
    }
  },
  // watch: {
  //   '$route.query': {
  //     handler () {
  //       this.getArticleId()
  //     },
  //     deep: true
  //   }
  methods: {
    getArticleId (item) {
      this.$emit('hideOffcanvas', item)
      this.articlesOffcanvas.hide()
    }
  },
  mounted () {
    this.articlesOffcanvas = new Offcanvas(this.$refs.articlesOffcanvas)
  }
}
</script>

<style>
.newsBtn-mobile {
  left:0%;
  top:0%;
}
</style>
