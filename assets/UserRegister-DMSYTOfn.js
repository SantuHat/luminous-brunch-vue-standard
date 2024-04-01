import{_ as c,r as p,o as m,c as h,b as e,s as a,v as l,x as r,g as f,y as u,d as b,F as w}from"./index-b4dgHHPy.js";const _={data(){return{obj:{email:"",password:"",checkPassword:"",name:"",phone:"",gender:"",Terms:!1},isLoading:!1}},watch:{"obj.phone":function(n){/^[09]{2}\d{8}$/.test(n)?this.$refs.phone.innerHTML="":this.$refs.phone.innerHTML='<p class="text-danger" data-message="phone">請填寫正確格式</p>'},"obj.email":function(n){/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(n)?this.$refs.email.innerHTML="":this.$refs.email.innerHTML='<p class="text-danger" data-message="e-mail">請填寫e-mail格式</p>'},"obj.password":function(n){const s=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;n.match(s)?this.$refs.password.innerHTML="":this.$refs.password.innerHTML='<p class="text-danger" data-message="password">請填寫6到20個字元之間的密碼，包含一個數字、一個大寫字母和一個小寫字母</p>'},"obj.checkPassword":function(){this.obj.checkPassword===this.obj.password?this.$refs.checkPassword.innerHTML="":this.$refs.checkPassword.innerHTML='<p class="text-danger" data-message="checkPassword">請與密碼相符</p>'},"obj.name":function(){this.obj.name!==""?this.$refs.name.innerHTML="":this.$refs.name.innerHTML='<p class="text-danger" data-message="name">請輸入用戶姓名</p>'}},methods:{register(){const n="https://demo-q3dk.onrender.com/signup";this.isLoading=!0,this.$http.post(n,this.obj).then(s=>{s.status===201&&(this.isLoading=!1,this.$router.push("/userlogin"))}).catch(s=>{this.isLoading=!1,alert(`${s.message} 註冊失敗`)})},CheckPassword(n){const s=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;return!!n.match(s)}},mounted(){}},g=e("div",{class:"login-bg"},null,-1),x={class:"container d-flex justify-content-center"},k={class:"login-body-bg row justify-content-center px-4"},j={class:"login-body"},y=e("h1",{class:"h3 my-3 font-weight-normal text-center text-primary"}," 新用戶註冊 ",-1),v={class:"mb-2"},L=e("label",{for:"inputEmail",class:"sr-only mb-1 fw-bold"},"電子郵件",-1),P={class:"text-danger","data-message":"Email",ref:"email"},M={class:"mb-2"},T=e("label",{for:"inputPassword",class:"sr-only mb-1 fw-bold"},"密碼",-1),V={class:"text-danger","data-message":"password",ref:"password"},H={class:"mb-2"},D=e("label",{for:"checkPassword",class:"sr-only mb-1 fw-bold"},"確認密碼",-1),U={class:"text-danger","data-message":"checkpassword",ref:"checkPassword"},R={class:"mb-2"},q=e("label",{for:"inputPassword",class:"sr-only mb-1 fw-bold"},"用戶姓名",-1),C={class:"text-danger","data-message":"phone",ref:"name"},B={class:"mb-2"},E=e("label",{for:"inputPassword",class:"sr-only mb-1 fw-bold"},"電話",-1),N={class:"text-danger","data-message":"phone",ref:"phone"},z={class:"d-flex"},A={class:"form-check pe-3"},F=e("label",{class:"form-check-label text-primary",for:"flexRadioDefault1"}," 男 ",-1),Z={class:"form-check"},$=e("label",{class:"form-check-label text-primary",for:"flexRadioDefault2"}," 女 ",-1),G={class:"text-center mt-4"},I=e("span",{class:"alertMessage text-yellow-100"},null,-1),J={class:"form-check mt-4"},K=e("label",{class:"form-check-label text-primary",for:"flexCheckDefault"},[e("p",null,' 註冊即表示同意"Luminous Brunch"的使用條款及細則以及隱私權政策 ')],-1);function O(n,s,Q,S,o,i){const d=p("LoadingView");return m(),h(w,null,[g,e("div",x,[e("form",k,[e("div",j,[y,e("div",v,[L,a(e("input",{type:"email",id:"inputEmail",class:"form-control w-100",placeholder:"請輸入電子郵件",required:"",autofocus:"","onUpdate:modelValue":s[0]||(s[0]=t=>o.obj.email=t)},null,512),[[l,o.obj.email]]),e("p",P,"*",512)]),e("div",M,[T,a(e("input",{type:"password",id:"inputPassword",class:"form-control w-100",placeholder:"請輸入密碼",required:"","onUpdate:modelValue":s[1]||(s[1]=t=>o.obj.password=t)},null,512),[[l,o.obj.password]]),e("p",V," * 6到20個字元之間的密碼，包含一個數字、一個大寫字母和一個小寫字母 ",512)]),e("div",H,[D,a(e("input",{type:"password",id:"checkPassword",class:"form-control w-100",placeholder:"確認輸入密碼",required:"","onUpdate:modelValue":s[2]||(s[2]=t=>o.obj.checkPassword=t)},null,512),[[l,o.obj.checkPassword]]),e("p",U,"*",512)]),e("div",R,[q,a(e("input",{type:"name",id:"inputName",class:"form-control w-100",placeholder:"請選擇用戶姓名",required:"","onUpdate:modelValue":s[3]||(s[3]=t=>o.obj.name=t)},null,512),[[l,o.obj.name]]),e("p",C,"*",512)]),e("div",B,[E,a(e("input",{type:"phone",id:"inputPhone",class:"form-control w-100",placeholder:"請輸入電話",required:"","onUpdate:modelValue":s[4]||(s[4]=t=>o.obj.phone=t)},null,512),[[l,o.obj.phone]]),e("p",N,"*",512)]),e("div",z,[e("div",A,[a(e("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1","onUpdate:modelValue":s[5]||(s[5]=t=>o.obj.gender=t)},null,512),[[r,o.obj.gender]]),F]),e("div",Z,[a(e("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",checked:"","onUpdate:modelValue":s[6]||(s[6]=t=>o.obj.gender=t)},null,512),[[r,o.obj.gender]]),$])]),e("div",G,[e("button",{class:"btn btn-lg btn-primary btn-block w-100",type:"submit",id:"signup",onClick:s[7]||(s[7]=f((...t)=>i.register&&i.register(...t),["prevent"]))}," 註冊 "),I]),e("div",J,[a(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":s[8]||(s[8]=t=>o.obj.Terms=t)},null,512),[[u,o.obj.Terms]]),K])])])]),b(d,{active:o.isLoading},null,8,["active"])],64)}const X=c(_,[["render",O]]);export{X as default};