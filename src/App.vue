<template>
  <div id="app" class="app">
    <button
      type="button"
      class="button"
      @click="$refs.mobileDrawer.show()"
    >меню</button>
    <nprogress-container></nprogress-container>
    <main-layout></main-layout>
    <mobile-drawer ref="mobileDrawer" />
  </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer.vue';
import MobileDrawer from './components/MobileDrawer.vue';

export default {
  name: 'app',

  data() {
    return {
      showDrawer: false,
    };
  },

  components: {
    MobileDrawer,
    NprogressContainer,
    MainLayout: () => import('./layouts/MainLayout.vue'),
  },
};
</script>

<style lang="scss">
  .app {
    height: 100vh;
  }

  .button {
    border: none;
    padding: 8px 30px;
    box-sizing: border-box;
    color: #a9a9a9;
    margin: 16px 0;
    background-color: #f0f0f0;
    border-radius: 25px;
    &:active,
    &:focus {
      outline: none;
      outline-width: 0;
    }

    &:hover {
      cursor: pointer;
      color: #6d6d6d;
    }
  }
</style>
