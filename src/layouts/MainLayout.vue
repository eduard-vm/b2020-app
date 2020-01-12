<template>
  <div class="main-layout">
    <shop-header></shop-header>
    <main>
      <router-view></router-view>
    </main>
    <shop-footer>the shop</shop-footer>
  </div>
</template>
<script>
import ShopHeader from '../components/ShopHeader.vue';
import ShopFooter from '../components/ShopFooter.vue';

export default {
  name: 'main-layout',

  components: {
    ShopHeader,
    ShopFooter,
  },
};
</script>
