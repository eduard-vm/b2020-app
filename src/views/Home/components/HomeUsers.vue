<template>
  <b-container class="home-users">
    <h2>Все пользователи</h2>
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
    margin-top: 100px;
    margin-bottom: 100px;

    h2 {
      margin: 30px 0;
    }
  }
</style>
