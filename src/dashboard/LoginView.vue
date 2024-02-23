<!-- eslint-disable no-tabs -->
<template>
	<NavBar></NavBar>
	<div class="container">
		<div class="row justify-content-center">
			<div class="d-flex justify-content-center mt-3">
				<h1 class="h3 mb-3 font-weight-normal">
				請先登入
				</h1>
			</div>
			<div class="col-8">
				<form id="form" class="form-signin" @submit.prevent="login">
					<div class="form-floating mb-3">
						<input type="email" class="form-control" id="username"
							placeholder="name@example.com" required autofocus v-model="user.username">
						<label for="username">Email address</label>
					</div>
					<div class="form-floating">
						<input type="password" class="form-control" id="password"
							placeholder="Password" required v-model="user.password">
						<label for="password">Password</label>
					</div>
					<button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
						登入
					</button>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
import NavBar from '../components/backComponents/NavBar.vue'
export default {
  components: {
    NavBar
  },
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    checkAdmin () {

    },
    login () {
      const api = 'https://vue3-course-api.hexschool.io/v2/admin/signin'
      this.$http.post(api, this.user)
        .then((res) => {
          const { token, expired } = res.data
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`
          this.$router.push('/dashboard/products')
          // console.log(res);
        })
        .catch(() => {
          // alert(err.data.message)
          window.location = 'login.html'
        })
    }
  }
}
</script>
