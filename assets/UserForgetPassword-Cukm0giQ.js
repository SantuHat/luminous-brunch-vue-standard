import{_ as u,r as p,o as h,c as m,b as s,q as a,s as r,v as l,t as w,g as d,d as b,w as _,e as f}from"./index-DB9Op6xa.js";const g={data(){return{isPost:!1,isResetViewClose:!0,userEmail:"",userValidateCode:"",usersData:{},userId:"",check:{newPassword:"",checkPassword:""}}},mounted(){this.isPost=!1},methods:{postValidateCode(){this.$http.get("https://demo-q3dk.onrender.com/users").then(o=>{this.isPost=!0,this.usersData=o.data,this.searchUserId()}).catch(o=>{console.log(o)})},searchUserId(){this.usersData.forEach(o=>{this.userEmail===o.email?this.userId=o.id:console.log("此信箱尚無會員資料，請先註冊帳號")})},patchNewPassword(){this.$http.patch(`https://demo-q3dk.onrender.com/users/${this.userId}`,{password:this.check.newPassword}).then(o=>{alert("修改成功"),this.$router.push("/userlogin")}).catch(o=>{console.log(o)})},resetPassword(){this.isResetViewClose=!1}}},y={class:"container d-flex justify-content-center login_min_h"},k={class:"login-body-bg row justify-content-center px-4"},v=s("h1",{class:"h3 mb-3 font-weight-normal text-center text-primary"},"忘記密碼",-1),C=s("label",{for:"inputEmail",class:"sr-only mb-1 fw-bold"},"電子郵件",-1),P={class:"mb-2 input-group"},V=["disabled"],x={class:"fw-bold mb-0"},E=s("p",{class:"errorMessage"},null,-1),N={class:"mb-2"},q=s("label",{for:"validateCode",class:"sr-only mb-1 fw-bold"},"驗證碼",-1),R=s("p",{class:"errorMessage"},null,-1),U={class:"text-center mt-4"},B=s("h1",{class:"h3 mb-3 font-weight-normal text-center"},"重置密碼",-1),D=s("p",{class:""},"密碼請輸入6-12碼，英文與數字混和",-1),I=s("label",{for:"inputNewpassword",class:"sr-only"},"輸入新密碼",-1),M=s("label",{for:"checkPassword",class:"sr-only"},"再次輸入新密碼",-1),j=s("p",{class:"newErrorMessage"},null,-1),L={class:"text-center mt-4"},T={class:"d-flex justify-content-center"},z=s("p",{class:"pe-3"},"尚未成為用戶?",-1);function F(o,e,S,A,t,i){const c=p("RouterLink");return h(),m("div",null,[s("div",y,[s("form",k,[s("div",{class:a(["login-body",{"d-none":!t.isResetViewClose}])},[v,C,s("div",P,[r(s("input",{"onUpdate:modelValue":e[0]||(e[0]=n=>t.userEmail=n),type:"email",name:"passwordNewEmail",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:""},null,512),[[l,t.userEmail]]),s("button",{onClick:e[1]||(e[1]=n=>i.postValidateCode()),class:"btn btn-outline-primary submitValidateEmail",type:"button",id:"button-addon2",disabled:t.isPost},[s("p",x,w(t.isPost?"已發送":"發送驗證碼"),1)],8,V)]),E,s("div",N,[q,r(s("input",{"onUpdate:modelValue":e[2]||(e[2]=n=>t.userValidateCode=n),type:"password",id:"validateCode",name:"validateCode",class:"form-control",placeholder:"請輸入驗證碼",required:""},null,512),[[l,t.userValidateCode]])]),R,s("div",U,[s("button",{onClick:e[3]||(e[3]=d(n=>i.resetPassword(),["prevent"])),class:"btn btn-lg btn-primary btn-block w-100 submitValidateCode",type:"button",id:"submitValidateCodeBtn"},"確認 ")])],2),s("div",{class:a(["login-body",{"d-none":t.isResetViewClose}])},[B,D,I,r(s("input",{"onUpdate:modelValue":e[4]||(e[4]=n=>t.check.newPassword=n),type:"password",name:"inputNewpassword",id:"inputNewpassword",class:"form-control w-100 mb-3",placeholder:"重置新密碼",required:"",autofocus:""},null,512),[[l,t.check.newPassword]]),M,r(s("input",{"onUpdate:modelValue":e[5]||(e[5]=n=>t.check.checkPassword=n),type:"password",name:"passwordNewEmail",id:"checkPassword",class:"form-control w-100",placeholder:"再次輸入重置新密碼",required:"",autofocus:""},null,512),[[l,t.check.checkPassword]]),j,s("div",L,[s("button",{onClick:e[6]||(e[6]=d(n=>i.patchNewPassword(),["prevent"])),class:"btn btn-lg btn-primary btn-block w-100",type:"button",id:"confrimNewPasswordBtn"}," 確認 ")])],2),s("div",{class:a(["mt-3",{"d-none":!t.isResetViewClose}])},[s("div",T,[z,b(c,{to:"/userregister",id:"pageChange",class:"text-decoration-none text-primary fw-bold"},{default:_(()=>[f("立即註冊")]),_:1})])],2)])])])}const H=u(g,[["render",F]]);export{H as default};
