<template>
  <b-list-group-item class="user-card">
    <h5>{{ user.name }}</h5>
    <small class="text-muted">{{ user.email }}</small>
    <b-button variant="link">Детали</b-button>
  </b-list-group-item>
</template>

<script>
export default {
  name: 'users-list-item',

  props: {
    user: Object,
    default() {
      return {};
    },
  },
};
</script>

<style lang="scss">
  @import '~@/assets/scss/components/card';

  .user-card {
    @extend .card;
  }
</style>
