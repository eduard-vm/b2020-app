<template>
  <div id="app" class="app">
    <main-layout></main-layout>
  </div>
</template>

<script>
export default {
  name: 'app',

  components: {
    MainLayout: () => import('./layouts/MainLayout.vue'),
  },
};
</script>

<style lang="scss" scoped>
  .app {
    height: 100vh;
  }
</style>
