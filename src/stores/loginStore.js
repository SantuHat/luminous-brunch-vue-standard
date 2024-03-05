import { defineStore } from 'pinia'

export default defineStore('loginStore', {
  state: () => ({
    isLogin: false
  }),
  actions: {
    setLogin (value) {
      localStorage.setItem('isLogin', value)
      this.isLogin = value
    },
    getLogin () {
      const isLogin = localStorage.getItem('isLogin')
      this.isLogin = isLogin === 'true'
      // console.log('this.isLogin', this.isLogin)
    }
  }
})
