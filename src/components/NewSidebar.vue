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
  </div>
</template>

<script>
export default {
  props: ['articles', 'getArticleId']
}
</script>
