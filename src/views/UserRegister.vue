<template>
 <div class="login-bg">
        <!-- <img src="/basil-tomato.png" alt="#" /> -->
      </div>
      <div class="container d-flex justify-content-center">
        <form class="login-body-bg row justify-content-center px-4">
          <div class="login-body">
            <h1 class="h3 my-3 font-weight-normal text-center text-primary">
              新用戶註冊
            </h1>
            <div class="mb-2">
              <label for="inputEmail" class="sr-only mb-1 fw-bold"
                >電子郵件</label
              >
              <input
                type="email"
                id="inputEmail"
                class="form-control w-100"
                placeholder="請輸入電子郵件"
                required
                autofocus
                v-model="obj.email"
              />
              <p class="text-danger" data-message="Email" ref="email">*</p>
            </div>
            <div class="mb-2">
              <label for="inputPassword" class="sr-only mb-1 fw-bold">密碼</label>
              <input
                type="password"
                id="inputPassword"
                class="form-control w-100"
                placeholder="請輸入密碼"
                required
                v-model="obj.password"
              />
              <p class="text-danger" data-message="password" ref="password">
                *
                6到20個字元之間的密碼，包含一個數字、一個大寫字母和一個小寫字母
              </p>
            </div>
            <div class="mb-2">
              <label for="checkPassword" class="sr-only mb-1 fw-bold"
                >確認密碼</label
              >
              <input
                type="password"
                id="checkPassword"
                class="form-control w-100"
                placeholder="確認輸入密碼"
                required
                v-model="obj.checkPassword"
              />
              <p class="text-danger" data-message="checkpassword" ref="checkPassword">*</p>
            </div>
            <div class="mb-2">
              <label for="inputPassword" class="sr-only mb-1 fw-bold"
                >用戶姓名</label
              >
              <input
                type="name"
                id="inputName"
                class="form-control w-100"
                placeholder="請輸入用戶姓名"
                required
                v-model="obj.name"
              />
              <p class="text-danger" data-message="phone" ref="name">*</p>
            </div>
            <div class="mb-2">
              <label for="inputPassword" class="sr-only mb-1 fw-bold">電話</label>
              <input
                type="phone"
                id="inputPhone"
                class="form-control w-100"
                placeholder="請輸入電話"
                required
                v-model="obj.phone"
              />
              <p class="text-danger" data-message="phone" ref="phone">*</p>
            </div>
            <div class="d-flex">
              <div class="form-check pe-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  v-model="obj.gender"
                />
                <label
                  class="form-check-label text-primary"
                  for="flexRadioDefault1"
                >
                  男
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                  v-model="obj.gender"
                />
                <label
                  class="form-check-label text-primary"
                  for="flexRadioDefault2"
                >
                  女
                </label>
              </div>
            </div>
            <div class="text-center mt-4">
              <button
                class="btn btn-lg btn-primary btn-block w-100"
                type="submit"
                id="signup"
                @click.prevent="register"
              >
                註冊
              </button>
              <span class="alertMessage text-yellow-100"></span>
            </div>
            <div class="form-check mt-4">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                v-model="obj.Terms"
              />
              <label class="form-check-label text-primary" for="flexCheckDefault">
                <p>
                  註冊即表示同意"Luminous Brunch"的使用條款及細則以及隱私權政策
                </p>
              </label>
            </div>
          </div>
        </form>
      </div>
      <LoadingView :active="isLoading" />
</template>

<script>
export default {
  data () {
    return {
      obj: {
        email: '',
        password: '',
        checkPassword: '',
        name: '',
        phone: '',
        gender: '',
        Terms: false
      },
      isLoading: false
    }
  },
  watch: {
    'obj.phone': function (n) {
      if (/^[09]{2}\d{8}$/.test(n)) {
        this.$refs.phone.innerHTML = ''
      } else {
        this.$refs.phone.innerHTML = '<p class="text-danger" data-message="phone">請填寫正確格式</p>'
      }
    },
    'obj.email': function (n) {
      if (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(n)) {
        this.$refs.email.innerHTML = ''
      } else {
        this.$refs.email.innerHTML = '<p class="text-danger" data-message="e-mail">請填寫e-mail格式</p>'
      }
    },
    'obj.password': function (n) {
      const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
      if (n.match(passw)) {
        this.$refs.password.innerHTML = ''
      } else {
        this.$refs.password.innerHTML = '<p class="text-danger" data-message="password">請填寫6到20個字元之間的密碼，包含一個數字、一個大寫字母和一個小寫字母</p>'
      }
    },
    'obj.checkPassword': function () {
      if (this.obj.checkPassword === this.obj.password) {
        this.$refs.checkPassword.innerHTML = ''
      } else {
        this.$refs.checkPassword.innerHTML = '<p class="text-danger" data-message="checkPassword">請與密碼相符</p>'
      }
    },
    'obj.name': function () {
      if (this.obj.name !== '') {
        this.$refs.name.innerHTML = ''
      } else {
        this.$refs.name.innerHTML = '<p class="text-danger" data-message="name">請輸入用戶姓名</p>'
      }
    }
  },
  methods: {
    register () {
      const api = 'https://demo-q3dk.onrender.com/signup'
      this.isLoading = true
      this.$http.post(api, this.obj)
        .then((res) => {
          if (res.status === 201) {
            this.isLoading = false
            this.$router.push('/userlogin')
          }
        })
        .catch((err) => {
          this.isLoading = false
          alert(`${err.message} 註冊失敗`)
        })
    },
    CheckPassword (password) {
      const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
      if (password.match(passw)) {
        return true
      } else {
        return false
      }
    }
  },
  mounted () {
    // this.register()
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
/* @media (max-width: 992px) {
  .login-bg {
    position: relative;
    display: block;
  }
} */

.login-body-bg {
  /* background-color: rgba(0, 0, 0, 0.75); */
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  min-height: 515px;
  padding: 20px 0 30px;
  width: 100%;
  max-width: 400px;
}
/* @media (max-width: 992px) {
  .login-body-bg {
    width: 100%;
  }
} */

/* .login-body-bg {
  position: absolute;
  top: 300px;
} */
/* @media (max-width: 992px) {
  .login-body-bg {
    position: absolute;
    top: 200px;
    width: 100%;
  }
} */

#pageChange:hover {
  border-bottom: 3px solid #EC6933;
  height: 30px;
}
</style>
