<template>
      <div class="container bg-pink font-color-gray-400">
        <div class="row mt-8 mb-8">
<<<<<<< HEAD
          <div class="col-3 me-10">
=======
          <div class="col-3">
>>>>>>> dev
          <NewSidebar/>
          </div>
          <div
            class="col-8"
          >
          <!-- v-for="item in articlesData"
            :key="item.id" -->
            <div class="font-NotoSerif mb-5 return-to-list">
              <RouterLink to="/newsmain" class="d-flex align-items-center mt-4">
                <img src="/Keyboard arrow left.png" alt="返回列表"/>
                <span>返回列表</span>
              </RouterLink>
            </div>
            <div class="news-title font-NotoSerif">
              <p>每日精選美味優惠</p>
            </div>
            <br /><br />
            <div class="d-flex justify-content-center news-content-pic">
              <img src="/restaurant.jpg" width="70%" :style="byStyle" alt="item.title" />
            </div>
            <div class="news-text lh-lg d-flex justify-content-center">
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
import NewSidebar from '../components/NewSidebar.vue'
// const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      articlesData: {},
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
  // methods: {
  //   // 後台登入
  // //   checkAdmin () {
  // //     // 確認登入狀態
  // //     this.$http.post('https://vue3-course-api.hexschool.io/v2/api/user/check')
  // //       .then((res) => {
  // //         console.log(res)
  // //       })
  // //       .catch((err) => {
  // //         console.log(err)
  // //       })
  // //   },
  // //   login () {
  // //     const api = 'https://vue3-course-api.hexschool.io/v2/admin/signin'
  // //     const account = {
  // //       username: 'luminous@gmail.com',
  // //       password: 'luminous'
  // //     }
  // //     this.$http.post(api, account)
  // //       .then((res) => {
  // //         console.log(res)
  // //         const { token, expired } = res.data
  // //         document.cookie = `hexToken=${token};expires=${new Date(expired)};`
  // //         // console.log(res);
  // //       })
  // //       .catch(() => {
  // //         // alert(err.data.message)
  // //         window.location = 'login.html'
  // //       })
  // //   // },
  // //   // getArticles () {
  // //   //   this.$http.get('https://vue3-course-api.hexschool.io/v2/api/luminous/articles')
  // //   //     .then((res) => {
  // //   //       console.log(res)
  // //   //     })
  // //   //     .catch((err) => {
  // //   //       console.log(err)
  // //   //     })
  // //   // },
  // //   // postArt () {
  // //   //   const data = {
  // //   //     data: {
  // //   //       title: '刷卡支付享95折優惠',
  // //   //       description: '「迎接新年前夕，我們推出了一項令人振奮的活動，讓您在繁忙的節慶季節中品味美味的同時，體驗別開生面的優惠！從現在開始至2023年12月31日，刷卡支付早午餐即可享受美味的同時，還可享受九五折的獨家折扣。這是一場讓您在節慶季節中感受溫馨與滿足的美好用餐體驗。 晨曦時分或是午後陽光下，刷卡支付即成為您節省的最佳選擇。每一次支付都是對口味的獨特追求，同時又為您的錢包帶來實在的好處。在新年即將到來之際，讓我們共同慶祝，用美味的食物和優惠的價格為新一年揭開序幕。輕鬆刷卡，品味美好，讓新年的前夕充滿愉悅和美好回憶！」',
  // //   //       image: 'https://github.com/SantuHat/luminous-brunch-vue-standard/blob/main/public/celebrate.jpg?raw=true',
  // //   //       tag: [
  // //   //         'tag1'
  // //   //       ],
  // //   //       create_at: 20230324,
  // //   //       author: 'alice',
  // //   //       isPublic: false,
  // //   //       content: '這是內容'
  // //   //     }
  // //   //   }
  // //   //   this.$http.post('https://vue3-course-api.hexschool.io/v2/api/luminous/admin/article',
  // //   //     data)
  // //   //     .then((res) => {
  // //   //       console.log(res)
  // //   //     })
  // //   //     .catch((err) => {
  // //   //       console.log(err)
  // //   //     })
  // //   // }
  // // }
}
</script>
