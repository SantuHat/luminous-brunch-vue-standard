<template>
  <h1>查看優惠券</h1>
</template>
  <LoadingView :active="isLoading" />
  <HeaderView/>
  <h1>查看優惠券</h1>
</template>

<script>
import HeaderView from '../components/HeaderView.vue'

export default {
  components: {
    HeaderView
  }
}
</script>
