<template>
  <div id="list-example" class="list-group">
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
    <!-- <RouterLink to="/newscontent" class="list-group-item list-group-item-action text-center">
      每日精選美味套餐優惠
    </RouterLink> -->
    <!-- <RouterLink to="/newscontent2" class="list-group-item list-group-item-action text-center">
      刷卡支付享95折優惠
    </RouterLink>
    <RouterLink to="/newscontent3" class="list-group-item list-group-item-action text-center">
      外帶早餐享9折優惠
    </RouterLink>
    <RouterLink to="/newscontent4" class="list-group-item list-group-item-action text-center">
      耶誕特色餐點新上市
    </RouterLink> -->
  </div>
</template>

<script>
export default {
  props: ['articles', 'getArticleId']
}
</script>
