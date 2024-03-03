<template>
<main>
  <div class="bgimage mb-9" :style="bgStyle">
      <div class="filter"></div>
      <h3>最新消息/優惠</h3>
  </div>
  <div class="news-desktop">
      <div class="list">
          <div class="img-wrapper d-flex justify-content-center">
          <img class="news-pic" src="/newsPic4.jpg" alt="" />
          <h3 class="news-content">
              <router-link to="/newscontent">
              "每日精選美味套餐優惠"
              <p class="fs-4 d-flex justify-content-center">
                <br/>活動期間:2024/01/10-2024/12/15
              </p>
              </router-link>
          </h3>
          </div>
          <div style="width: 100%" class="mb-10">
          <div class="d-flex justify-content-center">
              <div class="card" style="width: 20%">
              <img
                  src="/newsPic2.jpg"
                  class="main-card-img"
                  alt="..."
                  height="300px"
              />
              <div class="card-body card-content">
                  <h5 class="card-title">刷卡支付享95折優惠</h5>
                  <p class="card-text">活動期間:2024/01/10-2024/12/15</p>
                  <router-link to="/newscontent2" class="btn btn-primary">
                  了解更多
                  </router-link>
              </div>
              </div>

              <div class="card" style="width: 20%">
              <img
                  src="https://images.unsplash.com/photo-1627309302198-09a50ae1b209?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="main-card-img"
                  alt="..."
                  height="300px"
              />
              <div class="card-body card-content">
                  <h5 class="card-title">外帶早餐經典組合享9折優惠</h5>
                  <p class="card-text">活動期間:2024/01/10-2024/12/15</p>
                  <router-link to="/newscontent3" class="btn btn-primary">
                  了解更多
                  </router-link>
              </div>
              </div>

              <div class="card" style="width: 20%">
              <img
                  src="/newsPic3.jpg"
                  class="main-card-img"
                  alt="..."
                  height="300px"
              />
              <div class="card-body card-content">
                  <h5 class="card-title">歡慶冬季耶誕 特色餐點新上市</h5>
                  <p class="card-text">活動期間:2024/11/10-2024/12/24</p>
                  <router-link to="/newscontent4" class="btn btn-primary">
                  了解更多
                  </router-link>
              </div>
              </div>
          </div>
          </div>
      </div>
  </div>
  <div class="news-mobile">
      <div class="card">
          <img
          src="https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="card-img-top"
          alt="..."
          />
          <div class="card-body">
          <h5 class="card-title">每日精選美味套餐優惠</h5>
          <p class="card-text">活動期間:2024/01/10-2024/12/15</p>
          <router-link to="/newscontent" class="btn btn-primary">
          了解更多
          </router-link>
          </div>
      </div>
      <div class="card">
          <img
          src="https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="card-img-top"
          alt="..."
          />
          <div class="card-body">
          <h5 class="card-title">刷卡支付享95折優惠</h5>
          <p class="card-text">活動期間:2024/01/10-2024/12/15</p>
          <router-link to="/newscontent2" class="btn btn-primary">
          了解更多
          </router-link>
          </div>
      </div>
      <div class="card">
          <img
          src="https://images.unsplash.com/photo-1627309302198-09a50ae1b209?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="card-img-top"
          alt="..."
          />
          <div class="card-body">
          <h5 class="card-title">外帶早餐經典組合享9折優惠</h5>
          <p class="card-text">活動期間:2024/01/10-2024/12/15</p>
          <router-link to="/newscontent3" class="btn btn-primary">
          了解更多
          </router-link>
          </div>
      </div>
      <div class="card">
          <img
          src="https://images.unsplash.com/photo-1565895405137-3ca0cc5088c8?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="card-img-top"
          alt="..."
          />
          <div class="card-body">
          <h5 class="card-title">歡慶冬季耶誕 特色餐點新上市</h5>
          <p class="card-text">活動期間:2024/11/10-2024/12/24</p>
          <router-link to="/newscontent4" class="btn btn-primary">
          了解更多
          </router-link>
          </div>
      </div>
  </div>
</main>

<FooterView/>
</template>
<script>
import FooterView from '@/components/FooterView.vue'
export default {
  data () {
    return {
      bgStyle: {
        // 初始樣式，畫面從左至右移入
        transition: 'all 2s ease',
        transform: 'translateX(-100%)'
      }
    }
  },
  components: {
    FooterView
  },
  mounted () {
    setTimeout(() => {
      this.bgStyle.transform = 'translateX(0%)' // 將transform設置為0，使元素從左至右
    }, 500)
  }
}
</script>
<style>
    main .bgimage {
  min-height: 70vh;
  background-image: url("https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
  padding-left: 40vw;
}
main .bgimage .filter {
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  min-height: 70vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
main .bgimage h3 {
  font-size: 3rem;
  font-family: "Noto Serif TC";
  color: #461b09;
}
main .bgimage .new-1 {
  width: 70%;
}
main .news-desktop .list {
  flex-wrap: wrap;
  display: flex;
  width: 80vw;
  margin: 0 auto;
}
main .news-desktop .list .img-wrapper {
  width: 100%;
}
main .news-desktop .list .img-wrapper .news-pic {
  max-width: 30%;
  background-position: center;
  -o-object-fit: cover;
     object-fit: cover;
}
main .news-desktop .list .img-wrapper .news-content {
  justify-content: center;
  width: 30%;
  align-items: center;
  display: flex;
  background: #f4e9e2;
  padding-right: 3rem;
  padding-left: 3rem;
  margin-bottom: 0px;
  font-family: "Noto Serif TC";
  color: #693b28;
}
main .news-desktop .main-card-img {
  height: 45vmin;
}
main .news-desktop .card-content {
  flex-wrap: wrap;
  text-align: center;
  font-family: "Noto Serif TC";
}
main .news-desktop .card-content .card-img-size {
  -o-object-fit: cover;
     object-fit: cover;
  background-size: cover;
}

@media (max-width: 1399px) {
  .news-desktop {
    display: none;
  }
}
.news-mobile {
  display: none;
  flex-direction: column;
}

@media (max-width: 1399px) {
  .news-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .news-mobile .card {
    width: 80vw;
  }
}

</style>
