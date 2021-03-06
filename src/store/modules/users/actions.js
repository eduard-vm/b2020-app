/* eslint-disable no-console */

import Vue from 'vue';
import * as types from './mutation-types';

export default {
  async getUsers({ commit }) {
    commit('SET_LOADING', {
      all: true,
    });

    try {
      const { data } = await Vue.$http.get('/users');
      commit(types.SET_USERS, data);
    } catch (error) {
      console.error('@getUsers error: ', error);
    } finally {
      commit('SET_LOADING', {
        all: false,
      });
    }
  },
};
