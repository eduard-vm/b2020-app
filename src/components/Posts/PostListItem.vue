<template>
  <b-list-group-item class="post-card">
    <h5>{{ post.title }}</h5>
    <b-button variant="link">Читать</b-button>
  </b-list-group-item>
</template>

<script>
export default {
  name: 'post-list-item',

  props: {
    post: Object,
  },
};
</script>

<style lang="scss" scoped>
  .post-card {
    border-color:#f0f0f0;
    padding: 30px;
  }
</style>
