/* eslint-disable no-console */
import Vue from 'vue';

export const SET_LOADING = (state, loading) => {
  if (typeof loading === 'object') {
    Object.keys(loading).forEach((key) => {
      if (key in state.loading) {
        Vue.set(state.loading, key, loading[key]);
      } else {
        console.error(`@SET_LOADING: ключ ${key} не определен`);
      }
    });
  } else {
    state.loading = loading;
  }
};

export default {
  SET_LOADING,
};
