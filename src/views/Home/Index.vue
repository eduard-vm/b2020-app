<template>
  <div class="home-page">
    <b-container fluid>
      <b-container>
        <h1>Boogie app</h1>
      </b-container>
      <home-users />
      <home-posts />
    </b-container>
  </div>
</template>

<script>
// import HomeUsers from './components/HomeUsers.vue';

export default {
  name: 'home-page',

  components: {
    HomeUsers: () => import('./components/HomeUsers.vue'),
    HomePosts: () => import('./components/HomePosts.vue'),
  },
};
</script>

<style lang="scss" scoped>
  .home-page {
    margin: 30px 0;
  }
</style>
