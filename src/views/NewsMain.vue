<template>
  <LoadingView :active="isLoading" />
<main>
  <div class="bgimage mb-9 position" :style="bgStyle">
      <div class="filter"></div>
      <div class="absolute bg-opcity"><h3 class="fw-bold">最新消息/優惠</h3></div>
  </div>
  <div class="news-desktop">
    <div class="list">
      <RouterLink
        to="/newscontainer/newsarticle/-Nu3MfwtHtcyolQuRQIm" class="img-wrapper d-flex justify-content-center">
        <img class="news-pic" src="/newsPic4.jpg" alt="春季限定早午餐現已上線" />
        <h2 class="news-content overflow-hidden position-relative ">
            <div class="bagde-sale">
            限時優惠
            </div>
              <div class="wrapper-title" >
              <h3>春季限定早午餐</h3>
              <p class="fs-6 d-flex justify-content-center">
                <br/>活動期間:2024/01/10-2024/12/15
              </p>
              <button type="button" class="btn btn-primary w-100">
                了解更多
              </button>
              </div>
        </h2>
      </RouterLink>
      <div style="width: 100%" class="mb-10 mt-5">
        <div class="d-flex justify-content-center">
          <RouterLink  to="/newscontainer/newsarticle/-NttQn6g422HMdEdTiWL" class="card me-5" style="width: 20%">
            <img
              src="/newsPic2.jpg"
              class="main-card-img"
              alt="刷卡支付享95折"
              height="260px"/>
            <div class="card-body card-content">
                <h5 class="card-title">每日精選美味優惠</h5>
                <p class="card-text ">活動期間:2024/01/10-2024/12/15</p>
            </div>
            <div class="card-footer border-0 bg-transparent">
              <button type="button" class="btn btn-primary w-100">
                了解更多
              </button>
            </div>
          </RouterLink>
          <RouterLink  to="/newscontainer/newsarticle/-NttQbkejFtEEHdIqYqO" class="card me-5" style="width: 20%">
            <img
              src="https://images.unsplash.com/photo-1627309302198-09a50ae1b209?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="main-card-img"
              alt="外帶早餐經典組合"
              height="260px"
            />
            <div class="card-body card-content">
              <h5 class="card-title">外帶早餐經典組合享9折優惠</h5>
              <p class="card-text">活動期間:2024/01/10-2024/12/15</p>
            </div>
            <div class="card-footer border-0 bg-transparent">
                <button type="button" class="btn btn-primary w-100">
                  了解更多
                </button>
            </div>
          </RouterLink>
          <RouterLink to="/newscontainer/newsarticle/-NtgZu4xdb6vTZpMSCqd" class="card" style="width: 20%">
            <img
                src="/newsPic3.jpg"
                class="main-card-img"
                alt="歡慶冬季耶誕"
                height="260px"
            />
            <div class="card-body card-content">
                <h5 class="card-title">歡慶冬季耶誕 特色餐點新上市</h5>
                <p class="card-text">活動期間:2024/11/10-2024/12/24</p>
            </div>
            <div class="card-footer border-0 bg-transparent">
              <button type="button" class="btn btn-primary w-100">
                了解更多
              </button>
            </div>
          </RouterLink>
        </div>
      </div>
      </div>
  </div>

  <div class="news-mobile">
      <RouterLink class="card" to="/newscontainer/newsarticle/-Nu3MfwtHtcyolQuRQIm">
          <img
          src="https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="card-img-top"
          alt="每日精選美味套餐"
          />
          <div class="card-body">
            <h5 class="card-title">春季限定早午餐現已上線</h5>
            <p class="card-text">活動期間:2024/01/10-2024/12/15</p>
            <button type="button" class="btn btn-primary  w-100">
            了解更多
            </button>
          </div>
      </RouterLink>
      <RouterLink class="card" to="/newscontainer/newsarticle/-NttQn6g422HMdEdTiWL">
          <img
          src="https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="card-img-top"
          alt="每日精選美味優惠"
          />
          <div class="card-body">
          <h5 class="card-title">每日精選美味優惠</h5>
          <p class="card-text">活動期間:2024/01/10-2024/12/15</p>
          <button type="button" class="btn btn-primary  w-100">
            了解更多
            </button>
          </div>
      </RouterLink>
      <RouterLink class="card" to="/newscontainer/newsarticle/-NttQbkejFtEEHdIqYqO">
          <img
          src="https://images.unsplash.com/photo-1627309302198-09a50ae1b209?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="card-img-top"
          alt="每日精選美味優惠"
          />
          <div class="card-body">
          <h5 class="card-title">外帶早餐經典組合享9折優惠</h5>
          <p class="card-text">活動期間:2024/01/10-2024/12/15</p>
          <button type="button" class="btn btn-primary  w-100">
            了解更多
          </button>
          </div>
      </RouterLink>
      <RouterLink class="card" to="/newscontainer/newsarticle/-NtgZu4xdb6vTZpMSCqd">
          <img
          src="https://images.unsplash.com/photo-1565895405137-3ca0cc5088c8?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="card-img-top"
          alt="歡慶冬季耶誕"
          />
          <div class="card-body">
          <h5 class="card-title">歡慶冬季耶誕 特色餐點新上市</h5>
          <p class="card-text">活動期間:2024/11/10-2024/12/24</p>
          <button type="button" class="btn btn-primary  w-100">
            了解更多
          </button>
          </div>
      </RouterLink>
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
      },
      isLoading: false
    }
  },
  components: {
    FooterView
  },
  mounted () {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
      this.bgStyle.transform = 'translateX(0%)' // 將transform設置為0，使元素從左至右
    }, 500)
  }
}
</script>

<style>
    main .bgimage {
  min-height: 50vh;
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
  min-height: 50vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
main .bgimage h3 {
  font-size: 2.5rem;
  font-family: "Noto Serif TC", 'san-serif';
  color: #461b09;
}
@media(max-width: 992px){
.position{
  position: absolute;
}
@media(max-width: 992px) {
  .absolute{
    position: absolute;
    right: 55px;
  }
}
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
  position: relative;
}
main .news-desktop .list .img-wrapper .news-pic {
  max-width: 32%;
  background-position: center;
  -o-object-fit: cover;
     object-fit: cover;
}
main .news-desktop .list .img-wrapper .news-content {
  justify-content: center;
  width: 32%;
  align-items: center;
  display: flex;
  background: #f4e9e2;
  padding-right: 3rem;
  padding-left: 3rem;
  padding-top: 3rem;
  margin-bottom: 0px;
  font-family: "Noto Serif TC", 'san-serif';
  color: #693b28;
  z-index: 1;
}
 main .corner{
  opacity: 0.5;
    position: absolute;
    top: -100px;
    right: 120px;
    border: 100px solid #461B09;
    border-bottom-color: transparent;
    border-top-color: transparent;
    border-left-color: transparent;
    transform: rotateZ(135deg);
}
main .special{
  position: absolute;
    color: white;
    left: 1rem;
    bottom: 0;
    width: 100px;
    transform: rotateZ(270deg);
    font-size: 20px;
}
/* main .news-desktop .main-card-img {
   height: 45vmin;
} */
main .news-desktop .card-content {
  flex-wrap: wrap;
  text-align: center;
  font-family: "Noto Serif TC", 'san-serif';
}
main .news-desktop .card-content .card-img-size {
  -o-object-fit: cover;
     object-fit: cover;
  background-size: cover;
}
.news-content.wrapper-title {
  z-index: 1;
}
.card-body {
  margin-top: 16px;
}
.bagde-sale {
  position: absolute;
    background-color: #B58A78;
    color: white;
    height: 120px;
    width: 300px;
    top: -30px;
    right: -120px;
    font-size: 16px;
    text-align: center;
    transform: rotate(45deg);
    display: flex;
    align-items: end;
    justify-content: center;
    padding-bottom: 30px;
    padding-top: 80px;
    z-index: 0;
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
    margin-bottom: 30px;
    border-block: 2px block;
  }
}
.bg-opcity{
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
    padding: 24px;
}
@media (max-width:1399px){
  .bg-opcity{
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
    padding: 15px;
}
}
</style>
