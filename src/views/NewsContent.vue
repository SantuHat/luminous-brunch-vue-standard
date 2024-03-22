<template>
      <div class="container bg-pink font-color-gray-400">
        <div class="row mt-8 mb-8">
          <div class="col-4">
          <NewSidebar/>
          </div>
          <div class="col-8">
            <div class="font-NotoSerif mb-5 return-to-list">
              <RouterLink to="/newsmain">
                <img src="/Keyboard arrow left.png" alt="返回列表"/>
                返回列表
              </RouterLink>
            </div>
            <div class="news-title font-Noto Serif TC">
              <p>每日精選美味套餐優惠</p>
            </div>
            <br /><br />
            <div class="d-flex justify-content-center news-content-pic">
              <img src="/restaurant.jpg" width="70%" :style="byStyle" alt="每日精選美味套餐" />
            </div>
            <div class="news-text lh-lg d-flex justify-content-center">
              <p>
                「探索今日的精選美味套餐，每道菜品都是大廚匠心烹製的絕妙組合。由清新的開胃菜到口感豐富的主菜，再到結尾的甜點饗宴，每一口都是味蕾的享受。我們每日提供的特惠套餐更是讓您以優惠價格品味頂級美食。無論是輕鬆午餐還是浪漫晚宴，我們的套餐選擇滿足各種口味和場合需求，為您帶來美好的用餐體驗。別錯過每日的驚喜，與我們一同探索美食的無窮可能！」
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
