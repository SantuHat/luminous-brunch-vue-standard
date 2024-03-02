<!-- eslint-disable vue/no-dupe-keys -->
<template>
    <a id="toTOP" class="d-block" ref="toTOP" @click="scrollToTop" v-show="showBackToTopButton"
      ><img src="/Back to top-lg.png" alt="backToTopBtn"
    /></a>
</template>
<script>
export default {
  data () {
    return {
      BackToTopButton: ''
    }
  },
  mounted () {
    window.addEventListener('scroll', this.showBackToTopButton)
  },
  methods: {
    showBackToTopButton () {
      if (this.$refs.toTOP.offsetTop > 20) {
        this.BackToTopButton = true
      } else {
        this.BackToTopButton = false
      }
    },
    scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
