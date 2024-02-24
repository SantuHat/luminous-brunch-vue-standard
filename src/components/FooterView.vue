<!-- eslint-disable no-tabs -->
<template>
<footer class="py-4 border-top bg-pink">
  <div class="container">
    <div class="d-flex justify-content-around footer">
      <div class="d-flex align-items-center">
        <img class="mx-auto" src="/public/Logo-sm.png" alt="" />
      </div>
      <div class="footer-box">
        <ul class="d-flex ps-0">
          <li><a href="#">關於我們</a></li>
          <li><a href="3_newsMain.html">最新消息/優惠</a></li>
          <li><a href="5-1_booking.html">線上訂位</a></li>
          <li><a href="login.html">會員註冊/登入</a></li>
        </ul>
      </div>
      <div class="footer-icon d-flex align-items-center">
        <ul class="d-flex ps-0">
          <li>
            <a href="#"><img src="/public/Facebook.png" alt="#" /></a>
          </li>
          <li>
            <a href="#"><img src="/public/Instagram.png" alt="#" /></a>
          </li>
          <li>
            <a href="#"><img src="/public/Line.png" alt="#" /></a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="Info">
        <ul class="d-flex ps-0">
          <li class="me-3">
            <img
              src="/public/Email.png"
              alt=""
              style="margin-right: 0.5rem"
            />lumminous@gmail.com
          </li>
          <li class="me-3">
            <img
              src="/public/Phone.png"
              alt=""
              style="margin-right: 0.5rem"
            />(02)6765-0768
          </li>
          <li class="me-3">
            <img
              src="/public/Access time.png"
              alt=""
              style="margin-right: 0.5rem"
            />Business Hour 8:30~15:00
          </li>
        </ul>
      </div>
    </div>
    <div class="border"></div>
    <div class="Copyright">
      <ul class="d-flex justify-content-between ps-0">
        <li><p>Copyright © 2023 luminous.com | All Rights Reserved.</p></li>
        <li><p>本網站僅作為團體練習作品，無任何商業用途</p></li>
      </ul>
    </div>
  </div>
</footer>
</template>
<style>
.d-flex{
  list-style:none;
};
 /* img{
   @media (max-width:992px) {
     margin: auto;
   }
 } */
.footer{
  @media (max-width:992px) {
    flex-direction: column;
  }
}

.footer-box ul {
    margin: 2rem;
    text-decoration: none;
      @media (max-width:992px) {
        flex-direction: column;
        align-items: center;
      }
}
.footer-box li{
    margin: 1.5rem;
}
.footer-box a{
      text-decoration: none;
      color: black;
}
.footer-box a:hover{
        color: #8b8b8b
      }

.footer-icon{
  @media (max-width:992px) {
    margin: auto;
  }
}
.footer-icon ul li{
  margin: 1.5rem;
};

.Info ul{
    @media (max-width:992px) {
      flex-direction: column;
      align-items: center;
    }
  };

.Info li{
    @media (max-width:992px) {
      margin-right: 0;
      margin-bottom:1rem;
    }
}
   /* img{ */
     /* margin-right: 5px; */
   /* } */
.border{
  border: 1px #c1c1c1 solid;
};
.Copyright p{
    margin-top: 1rem;
    color: #c1c1c1;
    font-size: 12px;
  }
.Copyright ul{
      @media (max-width:992px) {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
