import{_ as i,m as h,a as u,o as a,c as l,b as t,t as o,F as c,g,q as n,v as d}from"./index-_e0xypRU.js";import{o as p}from"./orderStore-dr7uW6kf.js";const m={methods:{...h(p,["getOrderItem"])},computed:{...u(p,["userOrders","orderItem","orderTotal","userData"])},mounted(){this.getOrderItem(this.$route.query.orderId)}},y={class:"text-center my-7"},_=t("h3",{class:"mb-3 mt-12 text-center text-gray-400 font-NotoSerif"},"訂餐明細",-1),b={class:"container mt-5 mb-9"},x={class:"border border-gray box-shadow-gray-300 mx-auto w-100"},f=t("thead",{class:"bg-gray text-center"},[t("tr",null,[t("th",{class:"px-lg-6 py-lg-4",colspan:"2"},"商品"),t("th",{class:"px-lg-6 py-lg-4"},"單價"),t("th",{class:"px-lg-6 py-lg-4"},"數量"),t("th",{class:"px-lg-6 py-lg-4"},"小計"),t("th",{class:"px-lg-6 py-lg-4"},"總金額")])],-1),D={class:"position-relative"},w={class:"position-absolute js-tbody"},$={width:"12%"},v=["src","alt"],I={class:"text-center"},U={class:"text-center"},S={class:"text-center"},V=t("h3",{class:"mb-7 mt-10 text-center text-gray-400 font-NotoSerif"},"訂餐人資料",-1),q={class:"border border-gray box-shadow-gray-300 mx-auto w-100"},N=t("thead",{class:"bg-gray text-center"},[t("tr",null,[t("th",{class:"px-lg-6 py-lg-4"},"姓名"),t("th",{class:"px-lg-6 py-lg-4"},"手機號碼"),t("th",{class:"px-lg-6 py-lg-4"},"信箱")])],-1),O={class:"js-tbody"},T={class:"text-center p-5"},k={class:"text-center p-5"},B={class:"text-center p-5"};function j(s,r,F,A,E,L){return a(),l(c,null,[t("h3",y,"訂單編號: "+o(s.$route.query.orderId),1),_,t("div",b,[t("table",x,[f,t("tbody",D,[t("div",w,"NT$ "+o(s.orderTotal),1),(a(!0),l(c,null,g(s.orderItem,e=>(a(),l("tr",{key:e.id},[t("th",$,[t("img",{src:e.product.imageUrl,class:"me-2 toast-img",alt:e.product.imageUrl},null,8,v)]),t("th",null,o(e.product.title),1),t("th",I,o(e.product.price),1),t("th",U,o(e.qty),1),t("th",S,o(e.total),1)]))),128))])]),V,t("table",q,[N,t("tbody",O,[t("tr",null,[t("th",T,[n(t("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>s.userData.name=e),type:"text",placeholder:"姓名",class:"bg-transparent py-2 text-center border-0",disabled:""},null,512),[[d,s.userData.name]])]),t("th",k,[n(t("input",{"onUpdate:modelValue":r[1]||(r[1]=e=>s.userData.tel=e),type:"text",placeholder:"0911345678",class:"bg-transparent py-2 text-center border-0",disabled:""},null,512),[[d,s.userData.tel]])]),t("th",B,[n(t("input",{"onUpdate:modelValue":r[2]||(r[2]=e=>s.userData.email=e),type:"text",placeholder:"abc@gmail.com",class:"bg-transparent py-2 text-center border-0",disabled:""},null,512),[[d,s.userData.email]])])])])])])],64)}const C=i(m,[["render",j]]);export{C as default};
