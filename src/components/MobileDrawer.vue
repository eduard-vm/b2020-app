<template>
  <transition name="slide-fade">
    <div class="mobile-drawer" v-if="isShow">
      <button
        type="button"
        @click="hide"
        class="mobile-drawer__close-button"
      >&times;</button>
      <div class="mobile-drawer__header">
        <div>Мнею</div>
      </div>
      <div class="mobile-drawer__container">
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'mobile-drawer',

  data() {
    return {
      isShow: false,
    };
  },

  methods: {
    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    },
  },
};
</script>

<style lang="scss">
  .mobile-drawer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: #fff;
    font-weight: normal;
    background-color: rgba(blue, .8);

    &__header {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      padding: 12px 0;
    }

    &__container {
      height: calc(100vh - 32px);
    }

    &__close-button {
      position: absolute;
      top: 12px;
      right: 12px;
      margin: 0;
      padding: 0;
      border: 2px solid #fff;
      background: none;
      background-color: transparent;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      font-size: 18px;
      line-height: 18px;
      color: #fff;
    }
  }

  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: opacity 300ms, transform 300ms;
    will-change: opacity, transform;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
    transform: translate(0, 20px);
  }
</style>
