import{F as V}from"./FooterView-BXVRexua.js";import{_ as k,r as m,o as S,c as E,b as s,g as P,d as a,w as c,e as x,n as T,F as H,R as A,j as $}from"./index-DB9Op6xa.js";import{m as h,c as O,A as R,P as F,S as q,a as I}from"./pagination-siowSlJK.js";import"./Logo-sm-BtUVgNEr.js";const G="/luminous-brunch-vue-standard/Vector.png",W="/luminous-brunch-vue-standard/Vector-right.png",Z={data(){return{Guest:[{img:"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE5fHxodW1hbnxlbnwwfHwwfHx8MA%3D%3D",title:"陳嘉明",content:"他們的線上訂餐系統非常方便，讓我能在繁忙的日程中輕鬆安排用餐時光。用餐環境也非常優雅。讓我感受到了真正的歐式風情。"},{img:"https://media.istockphoto.com/id/1492705965/photo/young-woman-with-pink-hair-in-bright-magenta-sweatshirt-bucket-hat-and-flower-stickers-on-her.webp?b=1&s=170667a&w=0&k=20&c=wrTzfSfJlmlK8wOB0Vs3N46MFDnWlfVC2Dk2SCqDUbA=",title:"張曉春",content:"這個訂餐系統的使用介面非常簡單，讓我能夠輕鬆預定所需的服務。一切都清晰明瞭，不需要花太多時間就能完成預約流程。"},{img:"https://media.istockphoto.com/id/1660002064/photo/man-in-a-cafe-with-i-voted-sticker.webp?b=1&s=170667a&w=0&k=20&c=T6JgqQg3Sm896hTJy3U8h825vE2Yv8WuALeBtPBWgF4=",title:"林文忠",content:"這個訂餐系統提供了豐富的預約選項，使我能夠按照我的需求進行點餐。都能滿足我的個性化需求。"},{img:"https://plus.unsplash.com/premium_photo-1682095829263-596d331f6326?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SGVhZCUyMHN0aWNrZXJ8ZW58MHx8MHx8fDA%3D",title:"李麗",content:"他們的訂餐系統的用戶介面非常直覺，讓我在短時間內就能理解和使用。每個步驟都清晰可見，使得訂餐變得非常簡單而且沒有繁瑣的步驟。"}],currentPage:0}},methods:{render(){let g="";this.Guest.filter((t,v)=>this.currentPage===v||this.currentPage+1===v).forEach(t=>{g+=`<div class="card m-6">
            <ul class="d-flex">
              <li class=""coad-li><img src="${t.img}" alt="#" class="coad-img"></li>
              <li class=""coad-li><div class="card-name">${t.title}</div></li>
            </ul>
            <div class="card-body">
              <div class="star-box d-flex">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
              </div>
              <p>${t.content}<p>
            </div>
          </div>`}),this.$refs.courseSection.innerHTML=g},previousPage(){this.currentPage!==0&&(this.currentPage--,this.render())},nextPage(){this.currentPage!==this.Guest.length-1&&(this.currentPage++,this.render())}},mounted(){this.render()}},z={class:"section",id:"section--5"},J={class:"bg h-100"},U={class:"container"},Y={class:"row carousel slide py-11",id:"carouselExampleControls","data-bs-ride":"carousel"},X={class:"col-md-2 d-flex align-items-center justify-content-center col-sm-12"},K={class:"text m-b"},Q=s("h3",null,"顧客評論",-1),tt={class:"d-flex justify-content-between"},st={class:"arrow-left",id:"previous"},et=s("span",{class:"visually-hidden"},"Previous",-1),nt=s("img",{src:G,alt:""},null,-1),it=[et,nt],ot={class:"arrow-right",id:"next"},at=s("span",{class:"visually-hidden"},"Next",-1),lt=s("img",{src:W,alt:""},null,-1),ct=[at,lt],rt={class:"carousel-item d-flex",id:"course-section",ref:"courseSection",style:{"max-width":"1000px"}},dt={class:"d-flex justify-content-center booking pb-10"};function ut(g,t,v,f,p,u){const l=m("RouterLink");return S(),E("section",z,[s("div",J,[s("div",U,[s("div",Y,[s("div",X,[s("div",K,[Q,s("div",null,[s("ul",tt,[s("li",st,[s("a",{href:"#",class:"",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"prev",role:"button",onClick:t[0]||(t[0]=P((...d)=>u.previousPage&&u.previousPage(...d),["prevent"]))},it)]),s("li",ot,[s("a",{href:"#",class:"",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"next",role:"button",onClick:t[1]||(t[1]=P((...d)=>u.nextPage&&u.nextPage(...d),["prevent"]))},ct)])])])])]),s("div",rt,null,512)]),s("div",dt,[a(l,{to:"/menuview/menulist?category=salad",type:"button",class:"btn btn-primary"},{default:c(()=>[x(" 立即訂餐 ")]),_:1})])])])])}const pt=k(Z,[["render",ut]]),mt="/luminous-brunch-vue-standard/Back%20to%20top-lg.png",ft={data(){return{style:{}}},mounted(){window.addEventListener("scroll",this.showBackToTopButton),this.showBackToTopButton()},methods:{showBackToTopButton(){window.scrollY>20?this.style={display:"block",transition:"all 2s ease"}:this.style={display:"none"}},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}},_t=s("img",{src:mt,alt:"backToTopBtn"},null,-1),ht=[_t];function gt(g,t,v,f,p,u){return S(),E("a",{id:"toTOP",style:T(p.style),ref:"toTOP",onClick:t[0]||(t[0]=(...l)=>u.scrollToTop&&u.scrollToTop(...l))},ht,4)}const vt=k(ft,[["render",gt]]);function bt(g){let{swiper:t,extendParams:v,on:f,emit:p}=g;v({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function u(e){let n;return e&&typeof e=="string"&&t.isElement&&(n=t.el.querySelector(e),n)?n:(e&&(typeof e=="string"&&(n=[...document.querySelectorAll(e)]),t.params.uniqueNavElements&&typeof e=="string"&&n.length>1&&t.el.querySelectorAll(e).length===1&&(n=t.el.querySelector(e))),e&&!n?e:n)}function l(e,n){const o=t.params.navigation;e=h(e),e.forEach(i=>{i&&(i.classList[n?"add":"remove"](...o.disabledClass.split(" ")),i.tagName==="BUTTON"&&(i.disabled=n),t.params.watchOverflow&&t.enabled&&i.classList[t.isLocked?"add":"remove"](o.lockClass))})}function d(){const{nextEl:e,prevEl:n}=t.navigation;if(t.params.loop){l(n,!1),l(e,!1);return}l(n,t.isBeginning&&!t.params.rewind),l(e,t.isEnd&&!t.params.rewind)}function _(e){e.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),p("navigationPrev"))}function b(e){e.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),p("navigationNext"))}function w(){const e=t.params.navigation;if(t.params.navigation=O(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(e.nextEl||e.prevEl))return;let n=u(e.nextEl),o=u(e.prevEl);Object.assign(t.navigation,{nextEl:n,prevEl:o}),n=h(n),o=h(o);const i=(r,y)=>{r&&r.addEventListener("click",y==="next"?b:_),!t.enabled&&r&&r.classList.add(...e.lockClass.split(" "))};n.forEach(r=>i(r,"next")),o.forEach(r=>i(r,"prev"))}function C(){let{nextEl:e,prevEl:n}=t.navigation;e=h(e),n=h(n);const o=(i,r)=>{i.removeEventListener("click",r==="next"?b:_),i.classList.remove(...t.params.navigation.disabledClass.split(" "))};e.forEach(i=>o(i,"next")),n.forEach(i=>o(i,"prev"))}f("init",()=>{t.params.navigation.enabled===!1?B():(w(),d())}),f("toEdge fromEdge lock unlock",()=>{d()}),f("destroy",()=>{C()}),f("enable disable",()=>{let{nextEl:e,prevEl:n}=t.navigation;if(e=h(e),n=h(n),t.enabled){d();return}[...e,...n].filter(o=>!!o).forEach(o=>o.classList.add(t.params.navigation.lockClass))}),f("click",(e,n)=>{let{nextEl:o,prevEl:i}=t.navigation;o=h(o),i=h(i);const r=n.target;if(t.params.navigation.hideOnClick&&!i.includes(r)&&!o.includes(r)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===r||t.pagination.el.contains(r)))return;let y;o.length?y=o[0].classList.contains(t.params.navigation.hiddenClass):i.length&&(y=i[0].classList.contains(t.params.navigation.hiddenClass)),p(y===!0?"navigationShow":"navigationHide"),[...o,...i].filter(N=>!!N).forEach(N=>N.classList.toggle(t.params.navigation.hiddenClass))}});const M=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),w(),d()},B=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),C()};Object.assign(t.navigation,{enable:M,disable:B,update:d,init:w,destroy:C})}const xt="/luminous-brunch-vue-standard/index-menu-1.jpg",wt="/luminous-brunch-vue-standard/index-swiper2.jpg",yt="/luminous-brunch-vue-standard/index-swiper3.jpg",$t="/luminous-brunch-vue-standard/index-menu-mobile.jpg",kt="/luminous-brunch-vue-standard/index-swiper2-mb.jpg",St="/luminous-brunch-vue-standard/indexSwiper-mb-3.jpg",Et={data(){return{modules:[bt,R,F],pagination:{clickable:!1}}},components:{Swiper:q,SwiperSlide:I}},Ct={class:"section",id:"section-4"},Nt={class:"indexSwiper position-relative d-none d-lg-block mb-11"},Tt=s("div",{class:"menu-border"},null,-1),Bt=s("img",{src:xt,alt:""},null,-1),Pt=s("img",{src:wt,alt:""},null,-1),Lt=s("img",{src:yt,alt:""},null,-1),jt=s("h1",{class:"fs-1 font-NotoSerif text-light fw-bold"},"精 選 早 午 餐",-1),Dt=s("p",{class:"fs-3 font-Caveat text-light mt-1"},"Brunch Specials",-1),Mt=s("p",{class:"fs-3 font-Caveat text-light mt-1"},"Menu",-1),Vt=s("h1",{class:"fs-1 font-NotoSerif text-light fw-bold"},"餐 點 菜 單",-1),Ht={class:"indexSwiper position-relative d-lg-none mb-7"},At=s("div",{class:"menu-border"},null,-1),Ot=s("img",{src:$t,alt:"首頁菜單輪播1",class:"w-100"},null,-1),Rt=s("img",{src:kt,alt:"首頁菜單輪播2",class:"w-100"},null,-1),Ft=s("img",{src:St,alt:"首頁菜單輪播3",class:"w-100"},null,-1),qt=s("div",{class:"swiper-pagination"},null,-1),It=s("h3",{class:"fs-3 fs-md-1 font-NotoSerif text-light fw-bold"}," 精 選 早 午 餐 ",-1),Gt=s("h5",{class:"fs-5 font-Caveat text-light mt-1"},"Brunch Specials",-1),Wt=s("h3",{class:"fs-3 fs-md-1 font-NotoSerif text-light fw-bold"}," 餐 點 菜 單 ",-1),Zt=s("h5",{class:"fs-5 font-Caveat text-light mt-1"},"Menu",-1);function zt(g,t,v,f,p,u){const l=m("SwiperSlide"),d=m("swiper"),_=m("RouterLink"),b=m("swiper-slide");return S(),E(H,null,[s("section",Ct,[s("div",Nt,[Tt,a(d,{autoplay:{delay:2500,disableOnInteraction:!1},spaceBetween:30,pagination:{clickable:!0},loop:!0,centeredSlides:!0,modules:p.modules,style:T({"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#e28763",".swiper-pagination.swiper-pagination-bullet-active":"width: 56px"}),class:"mySwiper"},{default:c(()=>[a(l,null,{default:c(()=>[Bt]),_:1}),a(l,null,{default:c(()=>[Pt]),_:1}),a(l,null,{default:c(()=>[Lt]),_:1})]),_:1},8,["modules","style"]),a(_,{to:"/BrunchSpecialsView",class:"menu-title-bg position-absolute translate-middle menu-title-bg-brunch"},{default:c(()=>[jt,Dt]),_:1}),a(_,{to:"/menuview/menulist?category=salad",class:"menu-title-bg position-absolute translate-middle menu-title-bg-news"},{default:c(()=>[Mt,Vt]),_:1})])]),s("section",null,[s("div",Ht,[At,a(d,{autoplay:{delay:2500,disableOnInteraction:!1},spaceBetween:30,pagination:{clickable:!0},loop:!0,centeredSlides:!0,modules:p.modules,style:T({"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#e28763",".swiper-pagination.swiper-pagination-bullet-active":"width: 56px"}),class:"mySwiper"},{default:c(()=>[a(b,null,{default:c(()=>[Ot]),_:1}),a(b,null,{default:c(()=>[Rt]),_:1}),a(b,null,{default:c(()=>[Ft]),_:1}),qt]),_:1},8,["modules","style"]),a(_,{to:"/BrunchSpecialsView",class:"menu-title-bg position-absolute translate-middle menu-title-bg-brunch"},{default:c(()=>[It,Gt]),_:1}),a(_,{to:"/menuview/menulist?category=salad",class:"menu-title-bg position-absolute translate-middle menu-title-bg-news"},{default:c(()=>[Wt,Zt]),_:1})])])],64)}const Jt=k(Et,[["render",zt]]),Ut="/luminous-brunch-vue-standard/index-banner-logoText.png",Yt="/luminous-brunch-vue-standard/index-banner-logoText-sm.png",Xt="/luminous-brunch-vue-standard/index-banner-comma.png",Kt="/luminous-brunch-vue-standard/Desktop-arrow.png",L="/luminous-brunch-vue-standard/offerService3.png",j="/luminous-brunch-vue-standard/offerService.png",D="/luminous-brunch-vue-standard/offerService2.png",Qt="/luminous-brunch-vue-standard/news.png",ts="/luminous-brunch-vue-standard/star2.png",ss="/luminous-brunch-vue-standard/star.png",es="/luminous-brunch-vue-standard/Illustration.png",ns="/luminous-brunch-vue-standard/Illustration%20(1).png",is="/luminous-brunch-vue-standard/Illustration%20(2).png",os={components:{FooterView:V,GuestReviews:pt,BackToTop:vt,IndexSwiper:Jt,RouterLink:A}},as={class:"home"},ls={class:"position-relative"},cs={class:"banner d-flex flex-column align-items-lg-center justify-content-between justify-content-lg-end"},rs=s("div",{class:"container-fluid"},[s("img",{class:"logoText d-none d-md-block mt-md-9",src:Ut,alt:"logoText"}),s("img",{class:"d-block d-md-none ms-auto mx-sm-auto mt-8",src:Yt,alt:"logoText-sm"})],-1),ds={class:"container-fluid px-md-0 btnGroup d-flex flex-column align-items-end"},us=s("div",{class:"banner-text mb-3 mb-sm-7 position-relative align-self-sm-center align-self-lg-end"},[s("img",{class:"position-absolute img_comma d-none d-md-block",src:Xt,alt:"comma"}),s("p",{class:"fs-5 fs-md-2 py-3 px-5 py-md-7 px-md-9 font-NotoSerif fw-bold text-primary"},[x(" 隨時隨地預約，"),s("br",{class:"d-lg-none"}),x("即刻享受我們精心準備的歐式早午餐饗宴。"),s("br"),x(" 將陽光融入每一口滋味 ")])],-1),ps=s("img",{class:"desktop_arrow d-none d-md-block",src:Kt,alt:"Desktop-arrow"},null,-1),ms=$('<section class="section" id="section--1"><div class="container"><h2 class="text-primary font-NotoSerif fw-bold text-center mt-11"><div class="d-flex justify-content-center mb-7 dynamic-effect"><p class="font-Caveat me-3">Luminous</p><p class="font-NotoSerif">想提供您...</p></div></h2><ul class="row justify-content-center text-center ps-0 mb-11"><div class="col-lg-4"><li class="d-flex flex-column mb-3"><img src="'+L+'" alt=""><h5 class="text-yellow-300 font-NotoSerif">兼具營養及美味的餐點</h5></li></div><div class="col-lg-4"><li class="d-flex flex-column mb-3"><h5 class="text-yellow-300 font-NotoSerif d-none d-lg-block">明亮寬敞的用餐環境</h5><img src="'+j+'" alt=""><h5 class="text-yellow-300 font-NotoSerif d-lg-none">明亮寬敞的用餐環境</h5></li></div><div class="col-lg-4"><li class="d-flex flex-column mb-3"><img src="'+D+'" alt=""><h5 class="text-yellow-300 font-NotoSerif">找回迎接生活的動力</h5></li></div></ul><ul class="offer-mobile text-center ps-0 d-none"><li class="d-flex flex-column mb-3"><img src="'+L+'" alt=""><h5 class="text-yellow-300 font-NotoSerif">兼具營養及美味的餐點</h5></li><li class="d-flex flex-column mb-3"><img src="'+j+'" alt=""><h5 class="text-yellow-300 font-NotoSerif">明亮寬敞的用餐環境</h5></li><li class="d-flex flex-column mb-3"><img src="'+D+'" alt=""><h5 class="text-yellow-300 font-NotoSerif">找回迎接生活的動力</h5></li></ul></div></section>',1),fs={class:"section",id:"section--2"},_s={class:"bg-pink news-height"},hs={class:"container news-height position-relative d-flex align-items-center justify-content-center"},gs=$('<div class="newsPic position-absolute"><div class="position-relative"><img src="'+Qt+'" alt="" class="w-100"><div class="position-absolute top-0 start-0"><img class="star2" src="'+ts+'" alt=""></div><div class="position-absolute bottom-0 end-0 star-2"><img class="star2" src="'+ss+'" alt=""></div></div></div>',1),vs={class:"box news-list-desktop position-absolute"},bs={class:"news_list font-NotoSerif text-yellow-300 position-relative"},xs=$('<p class="text-primary text-news">最新消息</p><div class="paragraph"><div style="margin-bottom:35px;"><a href="3-1_newsContent.html">○ 每日精選美味套餐優惠</a></div><div style="margin-bottom:35px;"><a href="3-1_newsContent2.html">○ 刷卡支付享95折優惠</a></div><div style="margin-bottom:60px;"><a href="3-1_newsContent3.html">○ 外帶早餐享9折優惠</a></div></div>',2),ws={class:"link position-absolute end-0 top-100"},ys={class:"box news-list-mobile position-absolute"},$s={class:"news_list font-NotoSerif text-yellow-300 position-relative"},ks=$('<p class="text-primary text-news">最新消息</p><div class="paragraph"><div style="margin-bottom:35px;"><a href="3-1_newsContent.html">○ 每日精選美味套餐優惠</a></div><div style="margin-bottom:35px;"><a href="3-1_newsContent2.html">○ 刷卡支付享95折優惠</a></div><div style="margin-bottom:60px;"><a href="3-1_newsContent3.html">○ 外帶早餐享9折優惠</a></div></div>',2),Ss={class:"link position-absolute end-0 top-100"},Es=$('<section class="section" id="section--3"><div class="container my-11"><div class="d-flex flex-column justify-content-center"><h2 class="text-primary font-NotoSerif fw-bold text-center mb-11"> 簡單訂餐三步驟 </h2><div class="row align-items-center"><div class="col-lg-4"><div class="d-flex flex-column text-center"><img src="'+es+'" width="187px" alt="" class="mx-auto mb-7"><p class="font-NotoSerif fs-4">1. 挑選餐點</p></div></div><div class="col-lg-4"><div class="d-flex flex-column text-center justify-content-center"><img src="'+ns+'" width="187px" alt="" class="mx-auto mb-7"><p class="font-NotoSerif fs-4">2. 確認品項</p></div></div><div class="col-lg-4"><div class="d-flex flex-column text-center"><img src="'+is+'" width="145px" height="194px" alt="" class="mx-auto mb-7"><p class="font-NotoSerif fs-4">3. 完成訂單</p></div></div></div></div></div></section>',1);function Cs(g,t,v,f,p,u){const l=m("RouterLink"),d=m("IndexSwiper"),_=m("GuestReviews"),b=m("BackToTop"),w=m("FooterView");return S(),E("div",as,[s("section",ls,[s("div",cs,[rs,s("div",ds,[us,a(l,{to:"/menuview/menulist?category=salad",class:"btn_reserve align-self-sm-center py-3 px-9 py-md-4 px-md-11 btn_reserve_center"},{default:c(()=>[x("瀏覽餐點")]),_:1})])]),ps]),ms,s("section",fs,[s("div",_s,[s("div",hs,[gs,s("div",vs,[s("div",bs,[xs,s("div",ws,[a(l,{to:"newsmain",style:{float:"right",color:"#4a4a4a","margin-top":"15px",font:"NotoSerif"}},{default:c(()=>[x("看更多 >")]),_:1})])])]),s("div",ys,[s("div",$s,[ks,s("div",Ss,[a(l,{to:"newsmain",style:{float:"right",color:"#4a4a4a","margin-top":"15px",font:"NotoSerif"}},{default:c(()=>[x("看更多 >")]),_:1})])])])])])]),Es,a(d),a(_),a(b),a(w)])}const Ls=k(os,[["render",Cs]]);export{Ls as default};
