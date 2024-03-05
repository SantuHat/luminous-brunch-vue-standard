<template>
  <div class="home">
    <!-- banner start -->
    <section class="position-relative">
      <div
        class="banner d-flex flex-column align-items-lg-center justify-content-between justify-content-lg-end"
      >
        <div class="container-fluid">
          <img
            class="logoText d-none d-md-block mt-md-9"
            src="/index-banner-logoText.png"
            alt="logoText"
          />
          <img
            class="d-block d-md-none ms-auto mx-sm-auto mt-8"
            src="/index-banner-logoText-sm.png"
            alt="logoText-sm"
          />
        </div>
        <div
          class="container-fluid px-md-0 btnGroup d-flex flex-column align-items-end"
        >
          <div
            class="banner-text mb-3 mb-sm-7 position-relative align-self-sm-center align-self-lg-end"
          >
            <img
              class="position-absolute img_comma d-none d-md-block"
              src="/index-banner-comma.png"
              alt="comma"
            />
            <h1
              class="fs-5 fs-md-2 py-3 px-5 py-md-7 px-md-9 font-NotoSerif fw-bold text-primary"
            >
              隨時隨地預約，<br
                class="d-lg-none"
              />即刻享受我們精心準備的歐式早午餐饗宴。<br />
              將陽光融入每一口滋味
            </h1>
          </div>
          <RouterLink
            to="/menuview/menulist?category=salad"
            class="btn_reserve align-self-sm-center py-3 px-9 py-md-4 px-md-11 btn_reserve_center"
            >瀏覽餐點</RouterLink
          >
        </div>
      </div>
      <img
        class="desktop_arrow d-none d-md-block"
        src="/Desktop-arrow.png"
        alt="Desktop-arrow"
      />
    </section>
    <!-- banner end -->
    <!-- 提供服務-start -->
    <section class="section" id="section--1">
      <div class="container">
        <h2 class="text-primary font-NotoSerif fw-bold text-center mt-11">
        <!-- <img src="/scrollDesktop.png" alt="" /> -->
        <div class="d-flex justify-content-center mb-7 dynamic-effect">
          <p class="font-Caveat me-3">Luminous</p>
          <p class="font-NotoSerif">想提供您...</p>
        </div>
      </h2>
        <ul class="row justify-content-center text-center ps-0 mb-11">
          <div class="col-lg-4">
            <li class="d-flex flex-column mb-3">
            <img src="/offerService3.png" alt="" />
            <h5 class="text-yellow-300 font-NotoSerif">兼具營養及美味的餐點</h5>
          </li>
          </div>
          <div class="col-lg-4">
            <li class="d-flex flex-column mb-3">
            <h5 class="text-yellow-300 font-NotoSerif d-none d-lg-block">明亮寬敞的用餐環境</h5>
            <img src="/offerService.png" alt="" />
            <h5 class="text-yellow-300 font-NotoSerif d-lg-none">明亮寬敞的用餐環境</h5>
          </li>
          </div>
          <div class="col-lg-4">
            <li class="d-flex flex-column mb-3">
            <img src="/offerService2.png" alt="" />
            <h5 class="text-yellow-300 font-NotoSerif">找回迎接生活的動力</h5>
          </li>
          </div>
        </ul>
        <ul class="offer-mobile  text-center ps-0 d-none">
          <li class="d-flex flex-column mb-3">
            <img src="/offerService3.png" alt="" />
            <h5 class="text-yellow-300 font-NotoSerif">兼具營養及美味的餐點</h5>
          </li>
          <li class="d-flex flex-column mb-3">
            <img src="/offerService.png" alt="" />
            <h5 class="text-yellow-300 font-NotoSerif">明亮寬敞的用餐環境</h5>
          </li>
          <li class="d-flex flex-column mb-3">
            <img src="/offerService2.png" alt="" />
            <h5 class="text-yellow-300 font-NotoSerif">找回迎接生活的動力</h5>
          </li>
        </ul>
      </div>
    </section>
    <!-- 提供服務-end -->
    <!-- 最新消息-開始 -->
    <section class="section" id="section--2">
      <div
        class="bg-pink news-height"
      >
<<<<<<< HEAD
        <div class="container  news-height position-relative  d-flex align-items-center justify-content-center"
         >
          <div class="newsPic position-absolute ">
            <div class="position-relative">
              <img src="/news.png" alt="" class="w-100"/>
              <div class="position-absolute top-0 start-0">
                <img class="star2" src="/star2.png" alt="" />
              </div>
              <div class="position-absolute bottom-0 end-0 star-2">
                <img class="star2" src="/star.png" alt="" />
              </div>
            </div>
          </div>
          <div class="box news-list-desktop position-absolute">
            <div class="news_list font-NotoSerif text-yellow-300 position-relative">
              <p class="text-primary text-news">最新消息</p>
              <div class="paragraph">
                <div style="margin-bottom: 35px">
                  <a href="3-1_newsContent.html">○ 每日精選美味套餐優惠</a>
                </div>
                <div style="margin-bottom: 35px">
                  <a href="3-1_newsContent2.html">○ 刷卡支付享95折優惠</a>
                </div>
                <div style="margin-bottom: 60px">
                  <a href="3-1_newsContent3.html">○ 外帶早餐享9折優惠</a>
                </div>
=======
        <div class="newsPic">
          <div>
            <img src="/news.png" alt="" />
            <div class="position-absolute top-0 start-0">
              <img src="/star2.png" alt="" />
            </div>
            <div class="position-absolute bottom-0 end-0">
              <img src="/star.png" alt="" />
            </div>
          </div>
        </div>
        <div class="box news-list-desktop">
          <div class="news_list font-NotoSerif text-yellow-300">
            <p class="text-primary text-news">最新消息</p>
            <div class="paragraph">
              <div style="margin-bottom: 35px">
                <RouterLink to="/newscontent">○ 每日精選美味套餐優惠</RouterLink>
              </div>
              <div style="margin-bottom: 35px">
                <RouterLink to="/newscontent2">○ 刷卡支付享95折優惠</RouterLink>
              </div>
              <div style="margin-bottom: 60px">
                <RouterLink to="/newscontent3" style="">○ 外帶早餐享9折優惠</RouterLink>
              </div>
            </div>
          </div>
          <div class="link">
            <router-link to="/newsmain"
            style="
                float: right;
                color: #4a4a4a;
                margin-top: 15px;
                font: NotoSerif;
              ">看更多
            </router-link>
          </div>
        </div>
        <div class="box news-list-mobile">
          <div class="news_list font-NotoSerif text-yellow-300">
            <p class="text-primary text-news">最新消息</p>
            <div class="paragraph">
              <div style="margin-bottom: 35px">
                <RouterLink to="/newscontent">○ 每日精選美味套餐優惠</RouterLink>
              </div>
              <div style="margin-bottom: 35px">
                <RouterLink to="/newscontent2">○ 刷卡支付享95折優惠</RouterLink>
              </div>
              <div style="margin-bottom: 60px">
                <RouterLink to="/newscontent3" style="">○ 外帶早餐享9折優惠</RouterLink>
>>>>>>> 631bb4e7223849a282d9a9cfc83b4e7aed002ae3
              </div>
              <div class="link position-absolute end-0 top-100">
              <RouterLink
                to="newsmain"
                style="
                  float: right;
                  color: #4a4a4a;
                  margin-top: 15px;
                  font: NotoSerif;
                "
                >看更多 ></RouterLink
              >
            </div>
            </div>
          </div>
          <div class="box news-list-mobile position-absolute">
            <div class="news_list font-NotoSerif text-yellow-300 position-relative">
              <p class="text-primary text-news">最新消息</p>
              <div class="paragraph">
                <div style="margin-bottom: 35px">
                  <a href="3-1_newsContent.html">○ 每日精選美味套餐優惠</a>
                </div>
                <div style="margin-bottom: 35px">
                  <a href="3-1_newsContent2.html">○ 刷卡支付享95折優惠</a>
                </div>
                <div style="margin-bottom: 60px">
                  <a href="3-1_newsContent3.html">○ 外帶早餐享9折優惠</a>
                </div>
              </div>
              <div class="link position-absolute end-0 top-100">
              <a
                href="3_newsMain.html"
                style="
                  float: right;
                  color: #4a4a4a;
                  margin-top: 15px;
                  font: NotoSerif;
                "
                >看更多 ></a
              >
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 最新消息-結束 -->
    <!-- 預約三步驟 start -->
    <section class="section" id="section--3">
      <div class="container my-11">
        <div class="d-flex flex-column justify-content-center">
          <h2
            class="text-primary font-NotoSerif fw-bold text-center mb-11"
          >
            簡單訂餐三步驟
          </h2>
          <div class="row align-items-center" >
            <div class="col-lg-4">
              <div class="d-flex flex-column text-center">
                <img
                  src="/Illustration.png"
                  width="187px"
                  alt=""
                  class="mx-auto mb-7"
                />
                <p class="font-NotoSerif fs-4">1. 挑選餐點</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div
                class="d-flex flex-column text-center justify-content-center"
              >
                <img
                  src="/Illustration (1).png"
                  width="187px"
                  alt=""
                  class="mx-auto mb-7"
                />
                <p class="font-NotoSerif fs-4">2. 確認品項</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="d-flex flex-column text-center">
                <img
                  src="/Illustration (2).png"
                  width="145px"
                  height="194px"
                  alt=""
                  class="mx-auto mb-7"
                />
                <p class="font-NotoSerif fs-4">3. 完成訂單</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 預約三步驟 end -->
    <!-- 菜單區塊 start -->
    <!-- 做成元件引入 -->
    <IndexSwiper />
    <!-- swiper+菜單輪播測試 pc -->
    <!-- 顧客評論 start-->
    <GuestReviews></GuestReviews>
    <!-- 顧客頻論 end -->
    <BackToTop/>
    <FooterView/>
  </div>
</template>

<script>
import FooterView from '@/components/FooterView.vue'
import GuestReviews from '@/components/GuestReviews.vue'
import BackToTop from '@/components/BackToTop.vue'
import IndexSwiper from '@/components/IndexSwiper.vue'
import { RouterLink } from 'vue-router'
export default {
  components: {
    FooterView,
    GuestReviews,
    BackToTop,
    IndexSwiper,
    RouterLink
  }
}
</script>

<style scoped>
</style>
