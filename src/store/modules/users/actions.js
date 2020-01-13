/* eslint-disable no-console */

import Vue from 'vue';
import * as types from './mutation-types';

const transformRequestParams = params => ({
  page: params.page,
  per_page: params.perPage,
  total: params.total,
  total_pages: params.totalPages,
});

const transformPaginationResponse = params => ({
  page: params.page,
  perPage: params.per_page,
  total: params.total,
  totalPages: params.total_pages,
});

const transformUsersResponse = users => users.map(user => ({
  firstName: user.first_name,
  lastName: user.last_name,
  email: user.email,
  id: user.id,
  avatar: user.avatar,
}));

const prepareUsersResponse = (data) => {
  const result = {
    users: [],
    pagination: {},
  };

  Object
    .keys(data)
    .forEach((key) => {
      if (key === 'data') {
        result.users = data[key];
      } else {
        result.pagination[key] = data[key];
      }
    });

  result.pagination = transformPaginationResponse(result.pagination);
  result.users = transformUsersResponse(result.users);

  return result;
};


export default {
  async getUsers({ commit }, params) {
    commit('SET_LOADING', {
      all: true,
    });

    const requestParams = params ? transformRequestParams(params) : null;

    try {
      const res = await Vue.$http.get('/users', requestParams);
      const { users, pagination } = prepareUsersResponse(res.data);
      commit(types.SET_USERS, users);
      commit(types.SET_USERS_PAGINATION, pagination);
    } catch (error) {
      console.error('@getUsers error: ', error);
    } finally {
      commit('SET_LOADING', {
        all: false,
      });
    }
  },
};
