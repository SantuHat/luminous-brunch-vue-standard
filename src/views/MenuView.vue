<template>
<div class="py-6">
      <div class="container">
        <h1  class="display-1 text-center text-primary fw-bolder font-Caveat mb-auto">| MENU |</h1>
      </div>
</div>
<div class="container">
  <div class="py-6">
    <ul id="menuList" class="d-flex justify-content-around list-unstyled">
      <li v-for="item in categoryTitleList"
          :key="item">
        <RouterLink
          :to="`/menuview/menulist?category=${ item.query }`"
          class="link-primary fs-5 fw-bold font-NotoSerif"
          >{{ item.name }}系列</RouterLink
        >
      </li>
    </ul>
  </div>
</div>
<!-- 菜單渲染畫面 -->
  <RouterView ></RouterView>
  <FooterView></FooterView>
</template>
<script>
// import MenuList from '@/components/MenuList.vue'
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
      ]
    }
  }
}
</script>

<style scoped>
</style>
