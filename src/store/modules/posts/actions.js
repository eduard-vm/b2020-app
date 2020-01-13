/* eslint-disable no-console */

import Vue from 'vue';
import * as types from './mutation-types';

export default {
  async getPosts({ commit }) {
    commit('SET_LOADING', {
      all: true,
    });

    try {
      const { data } = await Vue.$http.get('/posts');
      commit(types.SET_POSTS, data);
    } catch (error) {
      console.error('@getPosts error: ', error);
    } finally {
      commit('SET_LOADING', {
        all: false,
      });
    }
  },
};
