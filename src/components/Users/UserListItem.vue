<template>
  <b-list-group-item>
    {{ user.firstName }} {{ user.lastName }}
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
