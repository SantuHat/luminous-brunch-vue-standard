import{_ as p,m as g,a as h,r as c,o as t,c as r,d,b as s,F as n,q as f,w as m,e as u,t as e}from"./index-DHhKwbeo.js";import{o as l}from"./orderStore-C-3D3eOo.js";const b={methods:{...g(l,["getOrders"])},computed:{...h(l,["userOrders","isLoading"])},mounted(){this.getOrders()}},y={class:"container py-5"},v=s("h2",{class:"text-center my-5 font-sans-serif fw-bold"},"訂單資訊",-1),w={class:"px-2 font-sans-serif"},x={class:"col-lg-3 px-0"},L=s("p",{class:"py-1 p-lg-3 fw-bold mb-0"},"訂單編號",-1),$={class:"py-lg-4"},k={class:"col-lg-3 px-0"},O=s("p",{class:"py-1 p-lg-3 fw-bold mb-0"},"訂單日期",-1),V={class:"py-lg-4"},N={class:"col-lg-3 px-0"},S=s("p",{class:"py-1 p-lg-3 fw-bold mb-0"},"付款狀態",-1),B={class:"py-lg-4"},C={class:"col-lg-3 px-0"},D=s("p",{class:"py-1 p-lg-3 fw-bold mb-0"},"訂單金額",-1),F={class:"py-lg-4"};function I(a,R,T,q,A,E){const i=c("LoadingView"),_=c("RouterLink");return t(),r(n,null,[d(i,{active:a.isLoading},null,8,["active"]),s("div",y,[v,s("div",w,[(t(!0),r(n,null,f(a.userOrders,o=>(t(),r("div",{key:o.id,class:"row text-center border border-2 border-gray mb-3"},[s("div",x,[L,s("p",$,[d(_,{class:"orderId_hover",to:`/userorderveiw?orderId=${o.id}`},{default:m(()=>[u(e(o.id),1)]),_:2},1032,["to"])])]),s("div",k,[O,s("p",V,e(new Date(o.create_at*1e3).toLocaleString()),1)]),s("div",N,[S,s("p",B,e(o.is_paid?"已付款":"未付款"),1)]),s("div",C,[D,s("p",F,"NT$ "+e(o.total),1)])]))),128))])])],64)}const z=p(b,[["render",I]]);export{z as default};
