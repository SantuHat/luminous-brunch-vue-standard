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
    <button class="btn btn-pink position-sticky end-100 newsBtn-mobile d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
      <span class="material-symbols-outlined">
      collections_bookmark
      </span>
    </button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title text-center fw-bold font-NotoSerif" id="offcanvasScrollingLabel">最新消息</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">Offcanvas with backdrop</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>.....</p>
  </div>
</div>
<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
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
        {{ item.title }}
    </RouterLink>
    </div>
  </div>
</div>

</template>

<script>
export default {
  props: ['articles', 'getArticleId']
}
</script>

<style>
.newsBtn-mobile {
  left:0%;
  top:0%;
}
</style>
