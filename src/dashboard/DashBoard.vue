<template>
    <NavBar></NavBar>
    <ToastMessages></ToastMessages>
    <RouterView />
</template>

<script>
import NavBar from '../components/backComponents/NavBar.vue'
import emitter from '../methods/emitter'
import ToastMessages from '../components/backComponents/ToastMessages.vue'

const { VITE_API } = import.meta.env
export default {
  components: {
    NavBar,
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  }, // 內層都可以使用外層的元件
  methods: {
    check () {
      const url = `${VITE_API}api/user/check`
      this.$http.post(url)
        .then(() => {
          // this.getData()
        })
        .catch(() => {
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    this.check()
  }
}
</script>
