<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
    <div class="mx-auto px-3 w-75 d-flex ">
      <a class="navbar-brand bg-white rounded-pill" href="#"><img src="/Logo-sm.png" alt="Logo"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/dashboard/products" class="nav-link text-white">產品</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/order" class="nav-link text-white">訂單</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/coupon" class="nav-link text-white">優惠券</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/article" class="nav-link text-white">文章</router-link>
          </li>
          <li class="nav-item">
            <a href="#" @click.prevent="logout" class="nav-link text-white">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout () {
      const api = 'https://vue3-course-api.hexschool.io/v2/logout'
      this.$http.post(api)
        .then((res) => {
          if (res.data.message) {
            this.$router.push('/login')
          }
        })
    }
  }
}
</script>
