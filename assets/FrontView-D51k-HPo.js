import{m as y,a as h,R as $,_ as k,r as m,o as l,c as n,b as t,d as e,w as a,e as r,n as c,t as f,f as g,g as D,F as w,p as V,h as M}from"./index-b4dgHHPy.js";import{D as I}from"./bootstrap.esm-CSuV2MM8.js";import{c as v}from"./cartStore-B5EVSdOh.js";import{l as x}from"./loginStore-wXI-d9cN.js";import{U as N}from"./UserCartEmptyData-CEvFwP4P.js";import{M as O}from"./MealList-B9vVVoh_.js";import{_ as S}from"./Logo-sm-BtUVgNEr.js";import"./orderStore-qGmj3X0j.js";const j="/luminous-brunch-vue-standard/Logo-lg.png",R={name:"HeaderView",data(){return{isMemberActive:!1,cartFrame:"",orderFoodOnline:"",memberCenterItem:"",routerName:"",category:""}},methods:{...y(v,["getCarts","delCart"]),...y(x,["setLogin","getLogin"]),logOut(){this.setLogin(!1),alert("已登出")},goChecking(){this.$router.push(this.isLogin?"/usercart":"/userlogin")}},computed:{...h(v,["cartData","cartTotal"]),...h(x,["isLogin"])},created(){this.getCarts(),this.category=this.$route.query.category},mounted(){this.getLogin(),this.cartFrame=new I(this.$refs.cartFrame)},watch:{$route(o){this.category=o.query.category,this.routerName=this.$route.name}},components:{RouterLink:$,UserCartEmptyData:N,MealList:O}},d=o=>(V("data-v-224daaad"),o=o(),M(),o),T={class:"bg-light box_shadow_bottom sticky-top"},B={class:"navbar navbar-expand-lg bg-body-tertiary pb-0"},E={class:"container-fluid d-flex justify-content-between p-lg-3 px-0"},H=d(()=>t("h1",{class:"mb-0"},[t("img",{class:"d-none d-md-block",src:j,alt:"Logo-lg"}),t("img",{class:"d-md-none smLogo",src:S,alt:"Logo-sm"})],-1)),U=d(()=>t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar-meun","aria-controls":"navbar-meun","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1)),q={class:"collapse navbar-collapse flex-lg-grow-0",id:"navbar-meun"},A={class:"navbar-nav mb-lg-0 align-items-lg-center"},z={class:"nav_item border-bottom-1"},G=d(()=>t("a",{class:"py-4 py-lg-3 px-5 fw-bold d-block",href:"#"},"關於我們",-1)),J={class:"nav_item border-bottom-1"},K=d(()=>t("a",{class:"py-4 py-lg-3 px-5 fw-bold d-block",href:"#"},"最新消息/優惠",-1)),P={class:"nav_item dropdown",id:"orderFoodOnline",ref:"orderFoodOnline"},Q=d(()=>t("a",{class:"py-4 px-5 fw-bold selectMenu d-block border-bottom-1 d-flex justify-content-between dropdown-toggle align-items-center",href:"javascript:;",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"線上訂餐 ",-1)),W={class:"dropdown-menu dropdownMenu list-unstyled ps-0 py-0","aria-labelledby":"orderFoodOnline"},X={key:0,class:"nav_item border-bottom-1 dropdown",ref:"cartFrame"},Y={class:"py-4 px-5 fw-bold fw-bold d-block d-flex nav-link dropdown-toggle dropdown-toggle-cart",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",href:"javascript:;"},Z=d(()=>t("span",{class:"me-1 text-primary"}," 購物車 ",-1)),tt={key:0,class:"badge rounded-pill bg-secondary"},et=d(()=>t("span",{class:"visually-hidden"},"unread messages",-1)),ot={class:"dropdown-menu dropdow_cart bg-pink py-0 position","aria-labelledby":"cartFrame"},st={key:0,class:"empty-data text-center"},at={key:1,class:"dropdown-menu-wrap"},rt={class:"dropdown-menu-footer text-center position-relative mb-2"},lt={class:"cartFinalTotal py-3 px-5 mt-3 d-block fw-bold"},nt={key:1,class:"dropdown",id:"memberCenterItem",ref:"memberCenterItem"},dt=d(()=>t("a",{class:"py-4 px-5 fw-bold d-block border-bottom-1 d-flex justify-content-between",href:"javascript:;","data-bs-toggle":"dropdown"},[r(" 會員中心"),t("span",{class:"material-symbols-outlined align-bottom"},"arrow_drop_down")],-1)),it={key:0,class:"dropdown-menu dropdownMemberCenter list-unstyled ps-0 py-0","aria-labelledby":"memberCenterItem"},ct={key:2,class:"memberLogin"},pt=d(()=>t("div",{class:"navbar_overlay"},null,-1));function mt(o,i,C,L,_,p){const s=m("RouterLink"),u=m("UserCartEmptyData"),F=m("MealList");return l(),n(w,null,[t("header",T,[t("nav",B,[t("div",E,[e(s,{to:"/"},{default:a(()=>[H]),_:1}),U,t("div",q,[t("ul",A,[t("li",z,[e(s,{to:"/aboutus"},{default:a(()=>[G]),_:1})]),t("li",J,[e(s,{to:"/newsmain"},{default:a(()=>[K]),_:1})]),t("li",P,[Q,t("ul",W,[t("li",null,[e(s,{class:c(["py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500",{selected:this.category==="salad"}]),to:"/menuview/menulist?category=salad"},{default:a(()=>[r("沙拉系列")]),_:1},8,["class"])]),t("li",null,[e(s,{class:c(["py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500",{selected:this.category==="burger"}]),to:"/menuview/menulist?category=burger"},{default:a(()=>[r("漢堡系列")]),_:1},8,["class"])]),t("li",null,[e(s,{class:c(["py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500",{selected:this.category==="sandwich"}]),to:"/menuview/menulist?category=sandwich"},{default:a(()=>[r("三明治系列")]),_:1},8,["class"])]),t("li",null,[e(s,{class:c(["py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500",{selected:this.category==="brunch"}]),to:"/menuview/menulist?category=brunch"},{default:a(()=>[r("早午餐拼盤")]),_:1},8,["class"])]),t("li",null,[e(s,{class:c(["py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500",{selected:this.category==="pasta"}]),to:"/menuview/menulist?category=pasta"},{default:a(()=>[r("義大利麵系列")]),_:1},8,["class"])]),t("li",null,[e(s,{class:c(["py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500",{selected:this.category==="drink"}]),to:"/menuview/menulist?category=drink"},{default:a(()=>[r("飲品")]),_:1},8,["class"])])])],512),_.routerName!=="usercart"?(l(),n("li",X,[t("a",Y,[Z,o.cartData.length>0?(l(),n("span",tt,[r(f(o.cartData.length)+" ",1),et])):g("",!0)]),t("div",ot,[o.cartData.length===0?(l(),n("div",st,[e(u)])):(l(),n("div",at,[t("div",{class:"dropdown-menu-content",onClick:i[0]||(i[0]=D(()=>{},["stop"]))},[e(F,{step:null,list:o.cartData},null,8,["list"])]),t("div",rt,[o.cartData.length>0?(l(),n(w,{key:0},[t("span",lt," 總計 NT$ "+f(o.cartTotal),1),t("button",{onClick:i[1]||(i[1]=(...b)=>p.goChecking&&p.goChecking(...b)),type:"button",class:"checkoutBtn position-absolute btn btn-primary py-3 px-5 mt-3"}," 前往結帳 ")],64)):g("",!0)])]))])],512)):g("",!0),o.isLogin?(l(),n("li",nt,[dt,o.isLogin?(l(),n("ul",it,[t("li",null,[e(s,{class:"py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500",to:"/userorders"},{default:a(()=>[r("查看訂單資訊")]),_:1})]),t("li",{onClick:i[2]||(i[2]=(...b)=>p.logOut&&p.logOut(...b))},[e(s,{class:"logOutBtn py-4 px-9 py-lg-3 px-lg-6 border-bottom-1 fw-500",to:"/"},{default:a(()=>[r("登出")]),_:1})])])):g("",!0)],512)):(l(),n("li",ct,[e(s,{to:"/userlogin",class:"py-4 py-lg-3 px-5 fw-bold d-block"},{default:a(()=>[r("會員註冊/登入")]),_:1})]))])])])])]),pt],64)}const gt=k(R,[["render",mt],["__scopeId","data-v-224daaad"]]),ut={components:{HeaderView:gt}},bt={class:"home"};function _t(o,i,C,L,_,p){const s=m("HeaderView"),u=m("RouterView");return l(),n("div",bt,[e(s),e(u)])}const Lt=k(ut,[["render",_t]]);export{Lt as default};