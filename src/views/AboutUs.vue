<template>
<section
      class="bg_aboutUs d-flex justify-content-center align-items-center"
    >
      <div class="container">
        <div class="bg-opcity col-md-6 mx-auto">
          <h1
            class="font-NotoSerif text-center text-primary fw-bolder fs-2 fs-md-1"
          >
            關於我們
          </h1>
        </div>
      </div>
    </section>
    <section class="section element" ref="fadeIn">
      <section class="section">
        <h2
          class="fs-2 font-NotoSerif fw-bolder text-center bg-pink py-5 py-md-9 mb-0"
        >
          我們的理念
        </h2>
        <div class="container py-5 py-md-7">
          <div class="row justify-content-center align-items-center mb-5">
            <div class="col-lg-5 mb-4">
              <img
                class="w-100 d-block mx-auto img_h_250"
                src="/2-2.jpg"
                alt="我們的理念"
              />
            </div>
            <div class="col-lg-5">
              <p class="fs-md-5 font-sans-serif">
                在現代忙碌的生活節奏中,讓人們能夠輕鬆地品味一份賞心悅目的早午餐。我們深知,擺盤精緻的美味餐點一直是人們的嚮往,然而,現實中忙碌的日程往往讓我們無法安心坐下來放鬆享受。於是,我們決定創建這個平台。
              </p>
            </div>
          </div>
          <div
            class="row justify-content-center align-items-center flex-column-reverse flex-lg-row"
          >
            <div class="col-lg-5">
              <p class="fs-md-5 font-sans-serif">
                我們期許透過我們用心打理的每個細節,能為您帶來一份短暫但美好的早午餐時光。讓您在忙碌的生活中多一個選擇,用心照顧自己的每一天。
              </p>
            </div>
            <div class="col-lg-5 mb-4">
              <img
                class="w-100 img_h_250 d-block mx-auto"
                src="/2-3.jpg"
                alt="我們的理念"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <h2
          class="fs-2 font-NotoSerif fw-bolder mb-0 text-center bg-pink py-5 py-md-9"
        >
          本店特色
        </h2>
        <div class="container py-5 py-md-7">
          <div class="row justify-content-center align-items-center mb-9 py-7">
            <div class="col-lg-5 mb-5">
              <img
              class="mx-auto d-block w-100 img_h_250"
                src="/christin-hume-mfB1B1s4sMc-unsplash.jpg"
                alt="即時訂餐class="
              />
            </div>
            <div class="col-lg-5">
              <h4 class="mb-4 text-center">即時訂餐</h4>
              <p class="fs-md-5 font-sans-serif">
                我們提供一套方便快捷的線上訂餐服務,您可以隨時選擇適合您口味的餐點,此訂餐系統為您省去了在繁忙時段可能需要等待的困擾,讓您可以確保在您心情最好的時刻來品味我們精心準備的早午餐。
              </p>
            </div>
          </div>
          <div
            class="row justify-content-center align-items-center flex-column-reverse flex-lg-row"
          >
            <div class="col-lg-5">
              <h4 class="mb-4 text-center">多元菜單</h4>
              <p class="fs-md-5 font-sans-serif">
                融合了歐式早午餐的美好與現代人的生活需求。我們不僅提供精心設計的菜單,包括沙拉系列、漢堡系列、三明治系列、早午餐拼盤、義大利麵系列以及多款精選飲品。
              </p>
            </div>
            <div class="col-lg-5 mb-5">
              <img
                class="w-100 img_h_250 d-block mx-auto"
                src="/2-4.jpg"
                alt="多元菜單"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
<FooterView/>
</template>

<script>
import FooterView from '../components/FooterView.vue'

export default {
  components: {
    FooterView
  },
  methods: {
    handleScroll () {
      // 監聽元素是否在視窗內
      const element = this.$refs.fadeIn
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      const windowWidth = window.innerWidth || document.documentElement.clientWidth

      // 如果進入視窗，觸發淡入效果
      if (rect.top < windowHeight && rect.bottom >= 0 && rect.left < windowWidth && rect.right >= 0) {
        element.style.opacity = 1
        // 確保滾動事件只觸發一次
        window.removeEventListener('scroll', this.handleScroll)
      } else {
        element.style.opacity = 0
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
 .element {
  opacity: 0;
  transition: opacity 1s;
  }
.bg-opcity{
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2px);
    padding: 24px;
}
.bg_aboutUs {
  background-image: url(/2-1.jpg);
  height: 400px;
  background-size: cover;
}
@media (max-width: 767px) {
  .bg_aboutUs {
    max-height: 250px;
  }
}
.img_h_250 {
  height: 350px;
  box-shadow: 1px 3px 5px;
}
</style>
