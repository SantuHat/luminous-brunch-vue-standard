import{_ as c,r as d,o as _,c as h,b as a,d as o,w as e,e as n,g as v}from"./index-b4dgHHPy.js";import{_ as p}from"./Logo-sm-BtUVgNEr.js";const u={methods:{logout(){this.$http.post("https://vue3-course-api.hexschool.io/v2/logout").then(t=>{t.data.message&&this.$router.push("/login")})}}},b={class:"navbar navbar-expand-lg navbar-light bg-dark"},g={class:"mx-auto px-3 w-75 d-flex"},m=a("a",{class:"navbar-brand bg-white rounded-pill",href:"#"},[a("img",{src:p,alt:"Logo"})],-1),f=a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1),x={class:"collapse navbar-collapse justify-content-end",id:"navbarNav"},k={class:"navbar-nav"},w={class:"nav-item"},N={class:"nav-item"},B={class:"nav-item"},$={class:"nav-item"},C={class:"nav-item"};function V(i,t,y,T,j,l){const s=d("router-link");return _(),h("nav",b,[a("div",g,[m,f,a("div",x,[a("ul",k,[a("li",w,[o(s,{to:"/dashboard/products",class:"nav-link text-white"},{default:e(()=>[n("產品")]),_:1})]),a("li",N,[o(s,{to:"/dashboard/order",class:"nav-link text-white"},{default:e(()=>[n("訂單")]),_:1})]),a("li",B,[o(s,{to:"/dashboard/coupon",class:"nav-link text-white"},{default:e(()=>[n("優惠券")]),_:1})]),a("li",$,[o(s,{to:"/dashboard/article",class:"nav-link text-white"},{default:e(()=>[n("文章")]),_:1})]),a("li",C,[a("a",{href:"#",onClick:t[0]||(t[0]=v((...r)=>l.logout&&l.logout(...r),["prevent"])),class:"nav-link text-white"},"登出")])])])])])}const M=c(u,[["render",V]]);export{M as N};
