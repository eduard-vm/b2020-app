<template>
  <div id="app">
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
