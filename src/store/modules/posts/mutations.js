import { SET_LOADING } from '../../common-mutations';
import * as types from './mutation-types';

export default {
  [types.SET_POSTS](state, posts) {
    state.all = posts;
  },

  [types.SET_POSTS_PAGINATION](state, pagination) {
    state.pagination = pagination;
  },

  SET_LOADING,
};
