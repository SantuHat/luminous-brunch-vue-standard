<!-- eslint-disable vue/no-dupe-keys -->
<template>
    <a id="toTOP" class="d-block" ref="toTOP" @click="scrollToTop" v-show="showBackToTopButton"
      ><img src="/public/Back to top-lg.png" alt="backToTopBtn"
    /></a>
</template>
<script>
export default {
  data () {
    return {
      showBackToTopButton: ''
    }
  },
  methods: {
    // eslint-disable-next-line vue/no-dupe-keys
    showBackToTopButton () {
      if (window.this.$refs.toTOP > 20) {
        this.showBackToTopButton = true
      } else {
        this.showBackToTopButton = false
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
