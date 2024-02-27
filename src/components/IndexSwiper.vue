<template>
  <!-- Swiper -->
<section class="section" id="section-4">
<div class="position-relative d-none d-lg-block mb-11">
  <div class="menu-border"></div>
  <swiper
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :loop="true"
    :centeredSlides="true"
    :modules="modules"
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#e28763',
      '.swiper-pagination.swiper-pagination-bullet-active':'width: 56px'
    }"
    class="mySwiper"
  >
    <SwiperSlide>
      <img src="/index-menu-1.jpg" alt="">
    </SwiperSlide>
    <SwiperSlide>
      <img src="/index-menu-1.jpg" alt="">
    </SwiperSlide>
    <SwiperSlide>
      <img src="/index-menu-1.jpg" alt="">
    </SwiperSlide>
  </swiper>
  <RouterLink
    to=""
    class="menu-title-bg position-absolute translate-middle menu-title-bg-brunch"
  >
    <h1 class="fs-1 font-NotoSerif text-light fw-bold">精 選 早 午 餐</h1>
    <p class="fs-3 font-Caveat text-light mt-1">Brunch Specials</p>
  </RouterLink>
  <RouterLink
    to="/NewMenuItems"
    class="menu-title-bg position-absolute translate-middle menu-title-bg-news"
  >
    <h1 class="fs-1 font-NotoSerif text-light fw-bold">最 新 餐 點</h1>
    <p class="fs-3 font-Caveat text-light mt-1">New Menu Items</p>
  </RouterLink>
</div>
</section>
    <!-- swiper+菜單輪播測試 結束 -->
    <!-- 菜單區塊 end -->
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  data () {
    return {
      modules: [Navigation, Autoplay, Pagination],
      pagination: {
        clickable: false
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>
<style scoped>

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination {
  position: static;
  margin: 0 auto;
}
.swiper-pagination.swiper-pagination-bullet {
  width: 36px;
  height: 8px;
  border-radius: 100px;
}
.swiper-pagination.swiper-pagination-bullet-active {
  width: 56px;
  border-radius: 100px;
  background-color: #e28763;
}
.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after {
    content: '';
}
</style>
<!-- :autoplay="{
  delay: 2500,
  disableOnInteraction: false
}" -->
