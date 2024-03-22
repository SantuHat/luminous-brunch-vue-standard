<template>
    <a id="toTOP" :style="style" ref="toTOP" @click="scrollToTop"
      ><img src="/Back to top-lg.png" alt="backToTopBtn"
    /></a>
</template>

<script>
export default {
  data () {
    return {
      style: {}
    }
  },
  mounted () {
    window.addEventListener('scroll', this.showBackToTopButton)
    this.showBackToTopButton()
  },
  methods: {
    showBackToTopButton () {
      if (window.scrollY > 20) {
        this.style = { display: 'block', transition: 'all 2s ease' }
        // console.log(window.scrollY, this.style)
      } else {
        this.style = { display: 'none' }
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
