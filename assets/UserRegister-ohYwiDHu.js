import{_ as p,r as m,o as f,c as h,b as e,e as i,v as a,x as l,z as d,h as u,A as b,d as w,F as g}from"./index-DBtjY0hd.js";const _={data(){return{obj:{email:"",password:"",checkPassword:"",name:"",phone:"",gender:"",Terms:!1},isLoading:!1}},watch:{"obj.phone":function(n){/^[09]{2}\d{8}$/.test(n)?this.$refs.phone.innerHTML="":this.$refs.phone.innerHTML='<p class="text-danger" data-message="phone">請填寫正確格式</p>'},"obj.email":function(n){/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(n)?this.$refs.email.innerHTML="":this.$refs.email.innerHTML='<p class="text-danger" data-message="e-mail">請填寫e-mail格式</p>'},"obj.password":function(n){const s=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;n.match(s)?this.$refs.password.innerHTML="":this.$refs.password.innerHTML='<p class="text-danger" data-message="password">請填寫6到20個字元之間的密碼，包含一個數字、一個大寫字母和一個小寫字母</p>'},"obj.checkPassword":function(){this.obj.checkPassword===this.obj.password?this.$refs.checkPassword.innerHTML="":this.$refs.checkPassword.innerHTML='<p class="text-danger" data-message="checkPassword">請與密碼相符</p>'},"obj.name":function(){this.obj.name!==""?this.$refs.name.innerHTML="":this.$refs.name.innerHTML='<p class="text-danger" data-message="name">請輸入用戶姓名</p>'}},methods:{register(){const n="https://demo-q3dk.onrender.com/signup";this.isLoading=!0,this.$http.post(n,this.obj).then(s=>{s.status===201&&(this.isLoading=!1,this.$router.push("/userlogin"))}).catch(s=>{this.isLoading=!1,alert(`${s.message} 註冊失敗`)})},CheckPassword(n){const s=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;return!!n.match(s)}},mounted(){}},x=e("div",{class:"login-bg"},null,-1),k={class:"container d-flex justify-content-center"},j={class:"login-body-bg row justify-content-center px-4"},y={class:"login-body"},v=e("h1",{class:"h3 my-3 font-weight-normal text-center text-primary"}," 新用戶註冊 ",-1),L={class:"mb-2"},P={for:"inputEmail",class:"sr-only mb-1 fw-bold d-flex align-items-center"},M={class:"text-danger mb-0 ps-2 mt-1","data-message":"Email",ref:"email"},T={class:"mb-2"},V=e("label",{for:"inputPassword",class:"sr-only mb-1 fw-bold"},"密碼",-1),H={class:"text-danger","data-message":"password",ref:"password"},D={class:"mb-2"},U={for:"checkPassword",class:"sr-only mb-1 fw-bold d-flex align-items-center"},R={class:"text-danger mb-0 ps-2 mt-1","data-message":"checkpassword",ref:"checkPassword"},q={class:"mb-2"},C={for:"inputPassword",class:"sr-only mb-1 fw-bold d-flex align-items-center"},B={class:"text-danger mb-0 ps-2 mt-1","data-message":"phone",ref:"name"},E={class:"mb-2"},N={for:"inputPassword",class:"sr-only mb-1 fw-bold d-flex align-items-center"},z={class:"text-danger mb-0 ps-2 mt-1","data-message":"phone",ref:"phone"},A={class:"d-flex"},F={class:"form-check pe-3"},Z=e("label",{class:"form-check-label text-primary",for:"flexRadioDefault1"}," 男 ",-1),$={class:"form-check"},G=e("label",{class:"form-check-label text-primary",for:"flexRadioDefault2"}," 女 ",-1),I={class:"text-center mt-4"},J=e("span",{class:"alertMessage text-yellow-100"},null,-1),K={class:"form-check mt-4"},O=e("label",{class:"form-check-label text-primary",for:"flexCheckDefault"},[e("p",null,' 註冊即表示同意"Luminous Brunch"的使用條款及細則以及隱私權政策 ')],-1);function Q(n,s,S,W,o,r){const c=m("LoadingView");return f(),h(g,null,[x,e("div",k,[e("form",j,[e("div",y,[v,e("div",L,[e("label",P,[i("電子郵件 "),e("p",M,"*",512)]),a(e("input",{type:"email",id:"inputEmail",class:"form-control w-100",placeholder:"請輸入電子郵件",required:"",autofocus:"","onUpdate:modelValue":s[0]||(s[0]=t=>o.obj.email=t)},null,512),[[l,o.obj.email]])]),e("div",T,[V,a(e("input",{type:"password",id:"inputPassword",class:"form-control w-100",placeholder:"請輸入密碼",required:"","onUpdate:modelValue":s[1]||(s[1]=t=>o.obj.password=t)},null,512),[[l,o.obj.password]]),e("p",H," * 6到20個字元之間的密碼，包含一個數字、一個大寫字母和一個小寫字母 ",512)]),e("div",D,[e("label",U,[i("確認密碼 "),e("p",R,"*",512)]),a(e("input",{type:"password",id:"checkPassword",class:"form-control w-100",placeholder:"確認輸入密碼",required:"","onUpdate:modelValue":s[2]||(s[2]=t=>o.obj.checkPassword=t)},null,512),[[l,o.obj.checkPassword]])]),e("div",q,[e("label",C,[i("用戶姓名 "),e("p",B,"*",512)]),a(e("input",{type:"name",id:"inputName",class:"form-control w-100",placeholder:"請輸入用戶姓名",required:"","onUpdate:modelValue":s[3]||(s[3]=t=>o.obj.name=t)},null,512),[[l,o.obj.name]])]),e("div",E,[e("label",N,[i("電話 "),e("p",z,"*",512)]),a(e("input",{type:"phone",id:"inputPhone",class:"form-control w-100",placeholder:"請輸入電話",required:"","onUpdate:modelValue":s[4]||(s[4]=t=>o.obj.phone=t)},null,512),[[l,o.obj.phone]])]),e("div",A,[e("div",F,[a(e("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1","onUpdate:modelValue":s[5]||(s[5]=t=>o.obj.gender=t)},null,512),[[d,o.obj.gender]]),Z]),e("div",$,[a(e("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",checked:"","onUpdate:modelValue":s[6]||(s[6]=t=>o.obj.gender=t)},null,512),[[d,o.obj.gender]]),G])]),e("div",I,[e("button",{class:"btn btn-lg btn-primary btn-block w-100",type:"submit",id:"signup",onClick:s[7]||(s[7]=u((...t)=>r.register&&r.register(...t),["prevent"]))}," 註冊 "),J]),e("div",K,[a(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":s[8]||(s[8]=t=>o.obj.Terms=t)},null,512),[[b,o.obj.Terms]]),O])])])]),w(c,{active:o.isLoading},null,8,["active"])],64)}const Y=p(_,[["render",Q]]);export{Y as default};
