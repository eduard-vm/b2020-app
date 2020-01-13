<template>
  <b-container class="home-users">
    {{ loading ? 'Загрузка' : '' }}
    <users-list :users="users" />
  </b-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import UsersList from '../../../components/Users/UsersList.vue';

export default {
  name: 'home-users',

  components: {
    UsersList,
  },

  computed: {
    ...mapState({
      users: ({ users }) => users.all,
      loading: ({ users }) => users.loading.all,
    }),
  },

  methods: {
    ...mapActions({
      getUsers: 'users/getUsers',
    }),
  },

  created() {
    this.getUsers();
  },
};
</script>

<style lang="scss" scoped>
  .home-users {
    min-height: 320px;
  }
</style>
