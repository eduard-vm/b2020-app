import Vue from 'vue';

export const setLoading = (state, loading) => {
  if (typeof loading === 'object') {
    Object.keys(loading).forEach((key) => {
      if (key in state.loading) {
        Vue.set(state.loading, key, loading[key]);
      } else {
        console.error(`@setLoading: ключ ${key} не определен`);
      }
    });
  } else {
    state.loading = loading;
  }
};

export default {
  setLoading,
};
