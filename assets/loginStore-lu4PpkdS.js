import{u as i}from"./index-_e0xypRU.js";const s=i("loginStore",{state:()=>({isLogin:!1}),actions:{setLogin(o){localStorage.setItem("isLogin",o),this.isLogin=o},getLogin(){const o=localStorage.getItem("isLogin");this.isLogin=o==="true"}}});export{s as l};
