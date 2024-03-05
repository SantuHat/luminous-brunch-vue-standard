<template>
<div class="py-6">
      <div class="container">
        <h1  class="display-1 text-center text-primary fw-bolder font-Caveat mb-auto">| MENU |</h1>
      </div>
</div>
<div class="container d-none d-lg-block">
  <div class="py-6">
    <ul id="menuList" class="d-flex justify-content-around list-unstyled">
      <li v-for="item in categoryTitleList"
          :key="item">
        <RouterLink
          class="icon-link icon-link-hover fw-bold font-NotoSerif fs-5"
          style="--bs-icon-link-transform: translate3d(0, -.4rem, 0);"
          :to="`/menuview/menulist?category=${ item.query }`"
          @click.prevent="changeColor(item.query)"
          :style="{color: item.query === nowLink ? activeColor : defaultColor}"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg>
          {{ item.name }}系列
        </RouterLink>
      </li>
    </ul>
  </div>
</div>

<!-- 菜單渲染畫面 -->

<div class="bg-pink py-6">
  <div class="container">
    <div class="menu-container row flex-wrap">
      <RouterView ></RouterView>
    </div>
  </div>
</div>

  <FooterView></FooterView>
</template>
<script>
import FooterView from '@/components/FooterView.vue'
export default {
  components: {
    FooterView
  },
  data () {
    return {
      categoryTitleList: [
        {
          name: '沙拉',
          query: 'salad'
        },
        {
          name: '漢堡',
          query: 'burger'
        },
        {
          name: '三明治',
          query: 'sandwich'
        },
        {
          name: '早午餐',
          query: 'brunch'
        },
        {
          name: '義大利麵',
          query: 'pasta'
        },
        {
          name: '飲品',
          query: 'drink'
        }
      ],
      nowLink: null,
      activeColor: '#B58A78',
      defaultColor: '#461B09'
    }
  },
  methods: {
    changeColor (title) {
      this.nowLink = title
    }
  },
  watch: {
    '$route.query.category' (value) {
      this.nowLink = value
    }
  },
  mounted () {
    this.nowLink = this.$route.query.category
  }
}
</script>

<style scoped>
RouterLink:hover {
  color: var(--active-color); /* 鼠标悬停时的颜色 */
}
</style>
