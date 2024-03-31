import{M as k,d as x}from"./DelModal-DIyoGJBC.js";import{_ as g,o as i,c as p,b as o,e as c,s as u,v as r,y as P,r as h,d as m,F as M,k as V,t as f}from"./index-BkM3Jw5p.js";import{P as D}from"./PaginationView-_HHMzTv3.js";import"./component-functions-BGILYdyw.js";const T={props:{coupon:{}},data(){return{tempCoupon:{},CouponModal:"",due_date:""}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon,console.log(this.tempCoupon.due_date);const e=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T");[this.due_date]=e},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},methods:{showModal(){this.CouponModal.show()},hideModal(){this.CouponModal.hide()}},mounted(){this.CouponModal=new k(this.$refs.CouponModal)}},I={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"CouponModal"},E={class:"modal-dialog",role:"document"},L={class:"modal-content"},U=o("div",{class:"modal-header"},[o("h5",{class:"modal-title",id:"exampleModalLabel"},"Modal title"),o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),A={class:"modal-body"},S={class:"mb-3"},N={for:"title"},B={class:"mb-3"},O={for:"coupon_code"},R={class:"mb-3"},F={for:"due_date"},H={class:"mb-3"},z={for:"price"},j={class:"mb-3"},q={class:"form-check"},G=o("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),J={class:"modal-footer"},K=o("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function Q(e,t,d,C,n,a){return i(),p("div",I,[o("div",E,[o("div",L,[U,o("div",A,[o("div",S,[o("label",N,[c("標題 "),u(o("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[0]||(t[0]=s=>n.tempCoupon.title=s),placeholder:"請輸入標題"},null,512),[[r,n.tempCoupon.title]])])]),o("div",B,[o("label",O,[c("優惠碼 "),u(o("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":t[1]||(t[1]=s=>n.tempCoupon.code=s),placeholder:"請輸入優惠碼"},null,512),[[r,n.tempCoupon.code]])])]),o("div",R,[o("label",F,[c("到期日 "),u(o("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[2]||(t[2]=s=>n.due_date=s)},null,512),[[r,n.due_date]])])]),o("div",H,[o("label",z,[c("折扣百分比 "),u(o("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":t[3]||(t[3]=s=>n.tempCoupon.percent=s),placeholder:"請輸入折扣百分比"},null,512),[[r,n.tempCoupon.percent,void 0,{number:!0}]])])]),o("div",j,[o("div",q,[u(o("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":t[4]||(t[4]=s=>n.tempCoupon.is_enabled=s)},null,512),[[P,n.tempCoupon.is_enabled]]),G])])]),o("div",J,[K,o("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=s=>e.$emit("update-coupon",n.tempCoupon))},"更新優惠券")])])])],512)}const W=g(T,[["render",Q]]);var X={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"luminous",BASE_URL:"/luminous-brunch-vue-standard/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:_,VITE_PATH:b}=X,Y={data(){return{coupon:[],couponPages:{},temCoupons:{title:"",is_enabled:0,percent:100,code:""},isNew:!1,isLoading:!1}},components:{CouponModal:W,delModal:x,PaginationView:D},methods:{getCoupon(e=1){const t=`${_}api/${b}/admin/coupons?page=${e}`;this.isLoading=!0,this.$http.get(t).then(d=>{this.isLoading=!1,this.coupon=d.data.coupons,this.couponPages=d.data.pagination})},upCoupon(){const e=this.$refs.CouponModal;let t=`${_}api/${b}/admin/coupon`,d="post";this.isNew||(t=`${_}api/${b}/admin/coupon/${this.temCoupons.id}`,d="put"),this.$http[d](t,{data:this.temCoupons}).then(C=>{this.$httpMessageState(C,"新增優惠券"),this.getCoupon(),e.hideModal(),this.temProduct={}}).catch(()=>{})},dleProduct(){const e=`${_}api/${b}/admin/coupon/${this.temCoupons.id}`;this.$http.delete(e).then(()=>{this.getCoupon(),this.$refs.delModal.hideModal()})},openModal(e,t){e?this.temCoupons={due_date:new Date().getTime()/1e3}:this.temCoupons={...t},this.isNew=e,this.$refs.CouponModal.showModal()},openDelModal(e){this.temCoupons={...e},this.$refs.delModal.showModal()}},mounted(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e,this.getCoupon()}},Z={class:"container-fluid"},oo={class:"text-end me-3 mt-4"},to={class:"table mt-4 mx-auto"},eo=o("thead",null,[o("tr",null,[o("th",{width:"120"},"名稱"),o("th",{width:"120"},"折扣百分比"),o("th",{width:"120"},"到期日"),o("th",{width:"100"},"是否啟用"),o("th",{width:"200"},"編輯")])],-1),no={class:"text-right"},so={key:0,class:"text-success"},lo={key:1,class:"text-muted"},ao={class:"btn-group"},io=["onClick"],po=["onClick"];function uo(e,t,d,C,n,a){const s=h("LoadIng"),v=h("CouponModal"),$=h("delModal"),w=h("PaginationView");return i(),p(M,null,[m(s,{active:n.isLoading},null,8,["active"]),o("div",Z,[o("div",oo,[o("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=l=>a.openModal(!0))},"新增優惠券")]),o("table",to,[eo,o("tbody",null,[(i(!0),p(M,null,V(n.coupon,l=>(i(),p("tr",{key:l.id},[o("td",null,f(l.title),1),o("td",null,f(l.percent)+"%",1),o("td",no,f(e.$filters.date(l.due_date)),1),o("td",null,[l.is_enabled?(i(),p("span",so,"啟用")):(i(),p("span",lo,"未啟用"))]),o("td",null,[o("div",ao,[o("button",{class:"btn btn-outline-primary btn-sm",onClick:y=>a.openModal(!1,l)},"編輯",8,io),o("button",{class:"btn btn-outline-danger btn-sm",onClick:y=>a.openDelModal(l)},"刪除",8,po)])])]))),128))])])]),m(v,{ref:"CouponModal",coupon:n.temCoupons,onUpdateCoupon:a.upCoupon},null,8,["coupon","onUpdateCoupon"]),m($,{item:n.temCoupons,ref:"delModal",onDelItem:a.dleProduct},null,8,["item","onDelItem"]),m(w,{pagination:n.couponPages,onEmitPages:a.getCoupon},null,8,["pagination","onEmitPages"])],64)}const _o=g(Y,[["render",uo]]);export{_o as default};
