<template>
  <div class="main-layout">
    <header>the header</header>
    <main>
      <router-view></router-view>
    </main>
    <footer>the footer</footer>
  </div>
</template>
<script>
export default {
  name: 'main-layout',
};
</script>
