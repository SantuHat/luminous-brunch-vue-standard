<template>
    <div class="home">
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
