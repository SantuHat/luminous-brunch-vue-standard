<template>
    <div class="home">
      <RouterLink to="/">Index</RouterLink> |
      <RouterLink to="/dashboard">dashboard</RouterLink>
      <HeaderView/>
      <RouterView />
    </div>
</template>

<script>
import HeaderView from '../components/HeaderView.vue'

export default {
  components: {
    HeaderView
  }
}
</script>

  <style scoped>
</style>
