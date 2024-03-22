<template>
      <div class="container bg-pink font-color-gray-400">
        <div class="row mt-8 mb-8">
          <div class="col-4">
          <NewSidebar/>
          </div>
          <div class="col-8">
            <div class="font-NotoSerif mb-5">
                <RouterLink to="/newsmain">
                <img src="/Keyboard arrow left.png" alt="返回列表"/>
                返回列表
              </RouterLink>
            </div>
            <div class="news-title">
              <p>外帶早餐經典組合享9折優惠</p>
            </div>
            <br /><br />
            <div class="d-flex justify-content-center news-content-pic">
              <img src="/celebrate.jpg" width="70%" :style="byStyle" alt="外帶早餐經典組合"/>
            </div>
            <div class="news-text lh-base d-flex justify-content-center">
              <p>
                「在這個匆忙的生活節奏中，我們理解您對美味早餐的需求。為了讓您能在忙碌的早晨也能品味到極致美味，我們推出了外帶早餐經典組合，現在更有驚喜的九折優惠等您來品味！
                活動期間，每一位選擇外帶早餐經典組合的顧客都可以享受九折的超值優惠。這不僅是對您忙碌生活的貼心照顧，更是為您提供美味早餐的經濟實惠之道。
                從濃郁的咖啡到香氣撲鼻的麵包，我們精心挑選了最受歡迎的經典組合，確保您在每一天的開始都能感受到美味的滋味。輕鬆外帶，享受九折優惠，讓我們一同為您的早晨帶來愉悅和美味的開始！」
              </p>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import NewSidebar from '../components/NewSidebar.vue'
export default {
  data () {
    return {
      byStyle: {
        transition: 'all 2s ease',
        opacity: '0'
      }
    }
  },
  components: {
    NewSidebar
  },
  mounted () {
    setTimeout(() => {
      this.byStyle.opacity = '1'
    }, 300)
  }
}
</script>
