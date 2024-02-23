<template>
<div class="py-6">
      <div class="container">
        <h1  class="display-1 text-center text-primary fw-bolder font-Caveat mb-auto">| MENU |</h1>
      </div>
</div>
<div class="container">
  <div class="py-6">
    <ul id="menuList" class="d-flex justify-content-around list-unstyled">
      <li>
        <RouterLink
          id="Salad"
          to="/menuview/menulist"
          class="link-primary fs-5 fw-bold font-NotoSerif"
          >沙拉系列</RouterLink
        >
      </li>
      <li>
        <RouterLink
          id="Burger"
          to="/menuview/menulist"
          class="link-primary fs-5 fw-bold font-NotoSerif"
          >漢堡系列</RouterLink
        >
      </li>
      <li>
        <a
          id="Sandwich"
          href="4-1_menu-salad.html?menu=Sandwich"
          class="link-primary fs-5 fw-bold font-NotoSerif"
          >三明治系列</a
        >
      </li>
      <li>
        <a
          id="Brunch"
          href="4-1_menu-salad.html?menu=Brunch"
          class="link-primary fs-5 fw-bold font-NotoSerif"
          >早午餐系列</a
        >
      </li>
      <li>
        <a
          id="Pasta"
          href="4-1_menu-salad.html?menu=Pasta"
          class="link-primary fs-5 fw-bold font-NotoSerif"
          >義大利麵系列</a
        >
      </li>
      <li>
        <a
          id="Drink"
          href="4-1_menu-salad.html?menu=Drink"
          class="link-primary fs-5 fw-bold font-NotoSerif"
          >飲品系列</a
        >
      </li>
    </ul>
  </div>
</div>
<!-- 菜單渲染畫面 -->
  <RouterView ></RouterView>
</template>
<script>
// import MenuList from '@/components/MenuList.vue'

export default {
  // components: {
  //   MenuList
  // }
  data () {
    return {
      categoryTitle: ''
    }
  }
}
</script>

<style scoped>
</style>
