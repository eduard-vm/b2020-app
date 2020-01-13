import { SET_LOADING } from '../../common-mutations';
import * as types from './mutation-types';

export default {
  [types.SET_USERS](state, users) {
    state.all = users;
  },

  [types.SET_USERS_PAGINATION](state, pagination) {
    state.pagination = pagination;
  },

  SET_LOADING,
};
