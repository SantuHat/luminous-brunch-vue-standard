<template>
  <VueLoadingOverlay :active="isLoading">
    <LoadingSpinner></LoadingSpinner>
  </VueLoadingOverlay>
</template>
<script>
import VueLoadingOverlay from 'vue-loading-overlay'
import LoadingSpinner from './LoadingSpinner.vue'
export default {
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    VueLoadingOverlay,
    LoadingSpinner
  }
}
</script>
