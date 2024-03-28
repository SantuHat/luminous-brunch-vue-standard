<template>
      <div class="container bg-pink font-color-gray-400">
<<<<<<< HEAD
        <div class="row mt-8 mb-8 ps-3">
          <div class="col-3 me-10">
=======
        <div class="row mt-8 mb-8">
          <div class="col-3">
>>>>>>> dev
          <NewSidebar/>
          </div>
          <div class="col-8">
            <div class="font-NotoSerif mb-5">
                <RouterLink to="/newsmain" class="d-flex">
                <img src="/Keyboard arrow left.png" alt="返回列表"/>
                <div>返回列表</div>
              </RouterLink>
            </div>
            <div class="news-title">
              <p>耶誕特色餐點新上市</p>
            </div>
            <br /><br />
            <div class="d-flex justify-content-center news-content-pic">
              <img src="/christmas.jpg" width="70%" :style="byStyle" alt="耶誕特色餐點"/>
            </div>
            <div class="news-text lh-base d-flex justify-content-center">
              <p>
                「
                隨著耶誕佳節的臨近，我們為您獻上了一份別開生面的耶誕特色早午餐，煥然一新的美味體驗即將在您的餐桌上展開！這特別的季節，我們精心設計了一系列獨具聖誕風情的早午餐菜單，讓您在晨曦與陽光中，享受一場別開生面的耶誕盛宴。
                從香濃的拿鐵咖啡到暖心的肉桂吐司，每一道菜品都散發著節慶的氛圍。我們精選的節慶早午餐套餐，結合了新鮮食材和獨特烹調技巧，呈現出一道道令人垂涎欲滴的佳餚。
                在這個特別的耶誕季節，與摯愛共享一頓豐盛的早午餐，成為美好回憶的開端。我們誠摯邀請您加入我們的節慶饗宴，感受耶誕的美好與溫馨，一同品味這令人難忘的季節美味！」
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
