<template>
<div class="login-bg">
  <LoadingView :active="isLoading" />
  <img src="/offerService.png" alt="#" />
</div>
<div class="container d-flex justify-content-center mb-5">
        <form class="login-body-bg row justify-content-center">
          <div class="login-body">
            <h1 class="h3 mb-3 font-weight-normal text-center text-light">
              登入
            </h1>
            <div class="mb-2">
              <label for="inputEmail" class="sr-only text-light"
                >Email address</label
              >
              <input
                type="email"
                id="inputEmail"
                class="form-control w-100"
                placeholder="Email address"
                required
                autofocus
                v-model="obj.email"
              />
            </div>
            <div class="mb-2">
              <label for="inputPassword" class="sr-only text-light"
                >Password</label
              >
              <input
                type="password"
                id="inputPassword"
                class="form-control w-100"
                placeholder="Password"
                required
                v-model="obj.password"
              />
            </div>
            <div class="text-center mt-4">
              <form class="form-signin" @click.prevent="UserLogin">
                <button class="btn btn-lg btn-block w-100 btn-blue" id="login" >
                  登入
                </button>
              </form>
            </div>
            <div class="mt-3">
              <div class="text-center my-3">
                <RouterLink
                  to="/userforgetpassword"
                  class="text-decoration-none text-blue"
                  id="pageChange"
                  >忘記密碼</RouterLink
                >
              </div>
              <div class="d-flex justify-content-center">
                <p class="text-light pe-3">尚未成為用戶?</p>
                <RouterLink
                  to="/userregister"
                  class="text-decoration-none text-blue"
                  id="pageChange"
                  >立即註冊</RouterLink
                >
              </div>
            </div>
          </div>
        </form>
      </div>
</template>
<script>
import { mapActions } from 'pinia'
import loginStore from '../stores/loginStore'

export default {
  data () {
    return {
      obj: {
        email: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    ...mapActions(loginStore, ['setLogin']),
    UserLogin () {
      const api = 'https://demo-q3dk.onrender.com/login'
      this.isLoading = true
      this.$http.post(api, this.obj)
        .then(() => {
          this.isLoading = false
          this.$router.push('/')
          this.setLogin(true)
        })
        .catch(() => {
          this.isLoading = false
          alert('登入失敗')
          this.setLogin(false)
        })
    }
  }
}
</script>
<style>
 .login-bg img {
  position: relative;
  background-size: cover;
  display: block;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  z-index: -1;
}
@media (max-width: 992px) {
  .login-bg {
    position: relative;
    display: block;
  }
}

.login-body-bg {
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 515px;
  padding: 20px 0 30px;
  width: 30%;
}
@media (max-width: 992px) {
  .login-body-bg {
    width: 100%;
  }
}

.login-body-bg {
  position: absolute;
  top: 300px;
}
@media (max-width: 992px) {
  .login-body-bg {
    position: absolute;
    top: 200px;
    width: 100%;
  }
}

#pageChange:hover {
  border-bottom: 3px solid #EC6933;
  height: 30px;
}
</style>
