import{F as m}from"./FooterView-BXVRexua.js";import{_ as w,r as a,o as s,c as n,b as e,F as c,h as l,d as i,w as f,e as v,t as d,n as g,g as k,f as b,p as L,i as q}from"./index-DB9Op6xa.js";import"./Logo-sm-BtUVgNEr.js";const x={components:{FooterView:m},data(){return{categoryTitleList:[{name:"沙拉",query:"salad"},{name:"漢堡",query:"burger"},{name:"三明治",query:"sandwich"},{name:"早午餐",query:"brunch"},{name:"義大利麵",query:"pasta"},{name:"飲品",query:"drink"}],nowLink:null,activeColor:"#B58A78",defaultColor:"#461B09"}},methods:{changeColor(t){this.nowLink=t}},watch:{"$route.query.category"(t){this.nowLink=t}},mounted(){this.nowLink=this.$route.query.category}},u=t=>(L("data-v-4c35cbfb"),t=t(),q(),t),C={class:"d-none d-lg-block"},V=u(()=>e("div",{class:"py-6"},[e("div",{class:"container"},[e("h1",{class:"display-1 text-center text-primary fw-bolder font-Caveat mb-auto"},"| MENU |")])],-1)),N={class:"container"},S={class:"py-6"},B={id:"menuList",class:"d-flex justify-content-around list-unstyled"},F=u(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-cart3",viewBox:"0 0 16 16"},[e("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"})],-1)),M={class:"container d-lg-none"},H={class:"py-6"},I={key:0,class:"text-center text-primary fw-bolder font-NotoSerif mb-auto"},R={class:"bg-pink py-6"},T={class:"container"},$={class:"menu-container row flex-wrap"};function z(t,A,E,j,r,_){const h=a("RouterLink"),p=a("RouterView"),y=a("FooterView");return s(),n(c,null,[e("div",C,[V,e("div",N,[e("div",S,[e("ul",B,[(s(!0),n(c,null,l(r.categoryTitleList,o=>(s(),n("li",{key:o},[i(h,{class:"icon-link icon-link-hover fw-bold font-NotoSerif fs-5",style:g([{"--bs-icon-link-transform":"translate3d(0, -.4rem, 0)"},{color:o.query===r.nowLink?r.activeColor:r.defaultColor}]),to:`/menuview/menulist?category=${o.query}`,onClick:k(D=>_.changeColor(o.query),["prevent"])},{default:f(()=>[F,v(" "+d(o.name)+"系列 ",1)]),_:2},1032,["to","onClick","style"])]))),128))])])])]),e("div",M,[e("div",H,[(s(!0),n(c,null,l(r.categoryTitleList,o=>(s(),n("div",{key:o,class:"text-center"},[t.$route.query.category===o.query?(s(),n("h1",I,d(o.name)+"系列 ",1)):b("",!0)]))),128))])]),e("div",R,[e("div",T,[e("div",$,[i(p)])])]),i(y)],64)}const K=w(x,[["render",z],["__scopeId","data-v-4c35cbfb"]]);export{K as default};
