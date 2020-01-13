<template>
  <b-container class="home-users">
    <h2>Все посты</h2>
    <posts-list :posts="posts" />
  </b-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import PostsList from '../../../components/Posts/PostsList.vue';

export default {
  name: 'home-users',

  components: {
    PostsList,
  },

  computed: {
    ...mapState({
      posts: ({ posts }) => posts.all,
      loading: ({ posts }) => posts.loading.all,
    }),
  },

  methods: {
    ...mapActions({
      getPosts: 'posts/getPosts',
    }),
  },

  created() {
    this.getPosts();
  },
};
</script>

<style lang="scss" scoped>
  .home-users {
    min-height: 320px;
    margin-top: 100px;
    margin-bottom: 100px;

    h2 {
      margin: 30px 0;
    }
  }
</style>
