<template>
      <div class="container bg-pink font-color-gray-400">
        <div class="row mt-8 mb-8">
          <div class="col-3 me-10">
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
              <p>刷卡支付享95折優惠</p>
            </div>
            <br /><br />
            <div class="d-flex justify-content-center news-content-pic">
              <img src="/celebrate.jpg" width="70%" :style="byStyle" alt="刷卡支付享95折"/>
            </div>
            <div class="news-text lh-base d-flex justify-content-center">
              <p>
                「迎接新年前夕，我們推出了一項令人振奮的活動，讓您在繁忙的節慶季節中品味美味的同時，體驗別開生面的優惠！從現在開始至2023年12月31日，刷卡支付早午餐即可享受美味的同時，還可享受九五折的獨家折扣。這是一場讓您在節慶季節中感受溫馨與滿足的美好用餐體驗。
                晨曦時分或是午後陽光下，刷卡支付即成為您節省的最佳選擇。每一次支付都是對口味的獨特追求，同時又為您的錢包帶來實在的好處。在新年即將到來之際，讓我們共同慶祝，用美味的食物和優惠的價格為新一年揭開序幕。輕鬆刷卡，品味美好，讓新年的前夕充滿愉悅和美好回憶！」
              </p>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
// import NewSidebar from '../components/NewSidebar.vue'
const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      articles: [],
      byStyle: {
        transition: 'all 2s ease',
        opacity: '0'
      }
    }
  },
  // components: {
  //   NewSidebar
  // },
  mounted () {
    setTimeout(() => {
      this.byStyle.opacity = '1'
    }, 300)
    this.getArticle()
  },
  props: ['id'],
  methods: {
    getArticle () {
      const url = `${VITE_API}api/${VITE_PATH}/article/-NtgZu4xdb6vTZpMSCqd`
      this.$http.get(url)
        .then((res) => {
          // console.log(res.data)
        })
        .catch((err) => {
          alert(err)
        })
    }
  }
}
</script>
