<template>
  <b-list-group>
    <post-list-item
      v-for="(post, index) of posts"
      :key="index"
      :post="post"
    />
  </b-list-group>
</template>

<script>
import PostListItem from './PostListItem.vue';

export default {
  name: 'posts-list',

  props: {
    posts: Array,
  },

  components: {
    PostListItem,
  },
};
</script>
