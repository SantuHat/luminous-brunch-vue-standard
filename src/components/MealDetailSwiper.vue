<template>
<div class="mealDetailSwiper">
  <!-- :autoplay="{
      delay: 2500,
      disableOnInteraction: false
      }" -->
    <swiper
      :autoplay="{
      delay: 2500,
      disableOnInteraction: false
      }"
      :slidesPerView="1"
      :spaceBetween="10"
      :pagination="{
        clickable: true,
      }"
      :loop="true"
      :breakpoints="{
        '768': {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }"
      :modules="modules"
      class="mySwiper menuDetailSwiper"
    >
      <swiper-slide>
        <div class="card-menu">
          <div class="card-img object-fit">
            <RouterLink :to="`/menuDetail/-NpjHP1Y5mG3J8z6treK`">
              <img src="https://github.com/Jenny031054/Luminous-Brunch/blob/main/assets/images/menuImg/baconPasta.jpg?raw=true" alt="" class="menu-img" title="點擊可以查看餐點詳細資訊">
            </RouterLink>
          </div>
          <div class="text-primary d-flex flex-column justify-content-between p-4">
              <h6 class="text-center mb-3">松露奶油培根義大利麵</h6>
              <div class="d-flex justify-content-center">
                <h6 class="text-danger fw-bold">$180 NT</h6>
                <del class="ms-3" >$200</del>
              </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card-menu">
          <div class="card-img object-fit">
            <RouterLink :to="`/menuDetail/-NpjHbjBdGkG68fS1ZN9`">
              <img src="https://images.unsplash.com/photo-1676037150606-ce6df635189e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="menu-img" title="點擊可以查看餐點詳細資訊">
            </RouterLink>
          </div>
          <div class="text-primary d-flex flex-column justify-content-between p-4">
              <h6 class="text-center mb-3">莓果奶酪法式蜂蜜吐司</h6>
              <div class="d-flex justify-content-center">
                <h6 class="text-danger fw-bold">$180 NT</h6>
                <del class="ms-3" >$200</del>
              </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card-menu">
          <div class="card-img object-fit">
            <RouterLink :to="`/menuDetail/-NpjGZ8uJRhBhOMNlqik`">
              <img src="https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="menu-img" title="點擊可以查看餐點詳細資訊">
            </RouterLink>
          </div>
          <div class="text-primary d-flex flex-column justify-content-between p-4">
              <h6 class="text-center mb-3">香煎骰子牛沙拉</h6>
              <div class="d-flex justify-content-center">
                <h6 class="text-danger fw-bold">$120 NT</h6>
                <del class="ms-3" >$150</del>
              </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card-menu">
          <div class="card-img object-fit">
            <RouterLink :to="`/menuDetail/-NpjGifgW8yTHpszygJd`">
              <img src="https://images.unsplash.com/photo-1601894087104-0c18bc34dbd6?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="menu-img" title="點擊可以查看餐點詳細資訊">
            </RouterLink>
          </div>
          <div class="text-primary d-flex flex-column justify-content-between p-4">
              <h6 class="text-center mb-3">培根起司太陽蛋漢堡</h6>
              <div class="d-flex justify-content-center">
                <h6 class="text-danger fw-bold">$180 NT</h6>
                <del class="ms-3" >$200</del>
              </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

</div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import '@/assets/pages/_swiper.scss'
// import MenuList from './MenuList.vue'

// import required modules
import { Pagination, Autoplay } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      modules: [Pagination, Autoplay]
    }
  }
}
</script>
