<template>
  <b-list-group>
    <user-list-item
      v-for="(user, index) of users"
      :key="index"
      :user="user"
    />
  </b-list-group>
</template>

<script>
import UserListItem from './UserListItem.vue';

export default {
  name: 'users-list',

  props: {
    users: Array,
  },

  components: {
    UserListItem,
  },
};
</script>
