<!-- eslint-disable no-tabs -->
<template>
<footer class="py-4 border-top bg-pink">
  <div class="container">
    <div class="d-flex justify-content-around footer">
      <div class="d-flex align-items-center">
        <img class="mx-auto" src="/Logo-sm.png" alt="" />
      </div>
      <div class="footer-box">
        <ul class="d-flex ps-0">
          <li><RouterLink to="/aboutus">關於我們</RouterLink></li>
          <li><RouterLink to="/newsmain">最新消息/優惠</RouterLink></li>
          <li><RouterLink to="/menuview/menulist?category=salad">線上訂餐</RouterLink></li>
          <li><RouterLink to="/userlogin">會員註冊/登入</RouterLink></li>
        </ul>
      </div>
      <div class="footer-icon d-flex align-items-center">
        <ul class="d-flex ps-0">
          <li>
            <img src="/Facebook.png" alt="#" />
          </li>
          <li>
            <img src="/Instagram.png" alt="#" />
          </li>
          <li>
            <img src="/Line.png" alt="#" />
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="Info">
        <ul class="d-flex ps-0">
          <li class="me-3">
            <img
              src="/Email.png"
              alt=""
              style="margin-right: 0.5rem"
            />lumminous@gmail.com
          </li>
          <li class="me-3">
            <img
              src="/Phone.png"
              alt=""
              style="margin-right: 0.5rem"
            />(02)6765-0768
          </li>
          <li class="me-3">
            <img
              src="/Access time.png"
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
.d-flex {
  list-style: none;
}

@media (max-width: 992px) {
  .footer {
    flex-direction: column;
  }
}

.footer-box ul {
  margin: 2rem;
  text-decoration: none;
}
@media (max-width: 992px) {
  .footer-box ul {
    flex-direction: column;
    align-items: center;
  }
}
.footer-box li {
  margin: 1.5rem;
}
.footer-box li a {
  text-decoration: none;
  color: black;
}
.footer-box li a:hover {
  color: #8b8b8b;
}

@media (max-width: 992px) {
  .footer-icon {
    margin: auto;
  }
}

.footer-icon ul li {
  margin: 1.5rem;
}

@media (max-width: 992px) {
  .Info ul {
    flex-direction: column;
    align-items: center;
  }
}
@media (max-width: 992px) {
  .Info li {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}

.border {
  border: 1px #c1c1c1 solid;
}

.Copyright p {
  margin-top: 1rem;
  color: #c1c1c1;
  font-size: 12px;
}
@media (max-width: 992px) {
  .Copyright ul {
    flex-direction: column;
    align-items: center;
  }
}
</style>
