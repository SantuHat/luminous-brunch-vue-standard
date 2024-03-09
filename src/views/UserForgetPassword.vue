<template>
    <div>
        <!-- <div class="login-bg">
          <img src="/offerService.png" alt="#">
        </div> -->
        <div class="container d-flex justify-content-center login_min_h">
          <form class="login-body-bg row justify-content-center px-4">
              <!-- 忘記密碼 -->
              <div class="login-body" :class="{ 'd-none': !isResetViewClose }">
                  <h1 class="h3 mb-3 font-weight-normal text-center text-primary">忘記密碼</h1>
                <label for="inputEmail" class="sr-only mb-1 fw-bold">電子郵件</label>
                  <div class="mb-2 input-group">
                  <input
                    v-model="userEmail"
                    type="email"
                    name="passwordNewEmail"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Email address"
                    required
                    autofocus
                  />
                  <button
                    @click="postValidateCode()"
                    class="btn btn-outline-secondary submitValidateEmail" type="button" id="button-addon2"
                    :disabled="isPost"
                  >
                    <p class=" fw-bold mb-0">
                      {{ isPost ? '已發送': '發送驗證碼'}}</p>
                  </button>
                  </div>
                  <!-- 放錯誤訊息的區塊 -->
                  <p class="errorMessage"></p>
                <div class="mb-2">
                  <label for="validateCode" class="sr-only mb-1 fw-bold">驗證碼</label>
                  <input
                    v-model="userValidateCode"
                    type="password"
                    id="validateCode"
                    name="validateCode"
                    class="form-control"
                    placeholder="請輸入驗證碼"
                    required
                  />
                </div>
                <!-- 放錯誤訊息的區塊 -->
                <p class="errorMessage"></p>
                <div class="text-center mt-4">
                  <button
                    @click.prevent="resetPassword()"
                    class="btn btn-lg btn-primary btn-block w-100 submitValidateCode" type="button" id="submitValidateCodeBtn"
                  >確認
                  </button>
                </div>
              </div>
              <!-- 重製密碼 -->
              <div class="login-body" :class="{ 'd-none': isResetViewClose }">
                <h1 class="h3 mb-3 font-weight-normal text-center ">重置密碼</h1>
                  <p class="">密碼請輸入6-12碼，英文與數字混和</p>
                    <label for="inputNewpassword" class="sr-only ">輸入新密碼</label>
                    <input
                      v-model="check.newPassword"
                      type="password"
                      name="inputNewpassword"
                      id="inputNewpassword"
                      class="form-control w-100 mb-3"
                      placeholder="重置新密碼"
                      required
                      autofocus
                    />
                    <label for="checkPassword" class="sr-only ">再次輸入新密碼</label>
                    <input
                      v-model="check.checkPassword"
                      type="password"
                      name="passwordNewEmail"
                      id="checkPassword"
                      class="form-control w-100"
                      placeholder="再次輸入重置新密碼"
                      required
                      autofocus
                    />
                    <!-- 放錯誤訊息的區塊 -->
                    <p class="newErrorMessage"></p>
                    <div class="text-center mt-4">
                      <button
                        @click.prevent="patchNewPassword()"
                        class="btn btn-lg btn-primary btn-block w-100"
                        type="button"
                        id="confrimNewPasswordBtn"
                      >
                        確認
                      </button>
              </div>
              </div>
              <div class="mt-3" :class="{ 'd-none': !isResetViewClose }">
                <div class="d-flex justify-content-center">
                  <p class="pe-3">尚未成為用戶?</p>
                  <RouterLink to="/userregister" id="pageChange" class="text-decoration-none text-primary fw-bold">立即註冊</RouterLink>
                </div>
              </div>
          </form>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      isPost: false,
      isResetViewClose: true,
      userEmail: '',
      userValidateCode: '',
      usersData: {},
      userId: '',
      check: {
        newPassword: '',
        checkPassword: ''
      }
    }
  },
  mounted () {
    this.isPost = false
    // this.postValidateCode()
  },
  methods: {
    postValidateCode () {
      // submitValidateEmail.textContent = '已發送'
      // const userEmail = passwordNewEmail.value
      // 取得所有使用者的帳號
      this.$http.get('https://demo-q3dk.onrender.com/users')
        .then((res) => {
          console.log(res.data)
          console.log(this.userEmail, res.data[0])
          this.isPost = true
          this.usersData = res.data
          this.searchUserId()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    searchUserId () {
      this.usersData.forEach((item) => {
        if (this.userEmail === item.email) {
          console.log()
          this.userId = item.id
          console.log('找到了', this.userId)
        } else {
          console.log('此信箱尚無會員資料，請先註冊帳號')
        }
      })
    },
    patchNewPassword () {
      // 發patch請求
      this.$http.patch(`https://demo-q3dk.onrender.com/users/${this.userId}`,
        {
          password: this.check.newPassword
        }
      )
        .then((res) => {
          console.log(res)
          alert('修改成功')
          this.$router.push('/userlogin')
        })
        .catch((error) => {
          console.log(error)
        })
    },
    resetPassword () {
      this.isResetViewClose = false
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
/* @media (max-width: 992px) {
  .login-bg {
    position: relative;
    display: block;
  }
} */

.login-body-bg {
  /* background-color: rgba(0, 0, 0, 0.75); */
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.15);
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  min-height: 515px;
  padding: 20px 0 30px;
  width: 100%;
  max-width: 400px;
  height: 50%;
}
@media (max-width: 992px) {
  .login-body-bg {
    width: 100%;
  }
}

/* .login-body-bg {
  position: absolute;
  top: 300px;
}
@media (max-width: 992px) {
  .login-body-bg {
    position: absolute;
    top: 200px;
    width: 100%;
  }
} */
.login_min_h {
  min-height: calc(100vh - 112px);
  align-items: center;
}
</style>
