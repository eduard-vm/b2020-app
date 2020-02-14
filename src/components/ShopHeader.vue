<template>
  <header class="header">
    <b-container fluid>
      <b-container>
        <b-row type="flex">
          <b-col>
            <b-nav>
              <b-nav-item>
                Главная
              </b-nav-item>
              <b-nav-item>
                Товары
              </b-nav-item>
              <b-nav-item>
                О нас
              </b-nav-item>
            </b-nav>
          </b-col>
          <b-col>
            <b-nav align="right">
              <b-nav-item>
                Аккаунт
              </b-nav-item>
              <b-nav-item>
                Корзина
              </b-nav-item>
            </b-nav>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </header>
</template>

<script>
export default {
  name: 'shop-header',
};
</script>

<style lang="scss">
  .header {
    min-height: 60px;
    background-color: #f0f0f0;
    padding: 20px 0;
  }

  .nav {
    .nav-link {
      color: #4d4d4d;
    }
  }
</style>
