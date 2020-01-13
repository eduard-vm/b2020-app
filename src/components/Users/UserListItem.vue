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

<style lang="scss" scoped>
  .user-card {
    // min-height: 320px;
    border-color:#f0f0f0;
    padding: 30px;
    // box-sizing: border-box;
    // margin-bottom: 20px;
    // border-radius: 12px;
    // box-shadow: 0 6px 12px rgba(black, .1);
  }
</style>
