<template>
    <div class="home">
      <h1>Hello, This is front Page.</h1>
      <RouterLink to="/index">Index</RouterLink> |
      <RouterLink to="/login">dashboard</RouterLink>
      <hr>
      <RouterView />
    </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
//   components: {
//   }
}
</script>

  <style scoped>
</style>
