import Vue from 'vue';
import Axios from 'axios';
import { BASE_URL } from '../config';

Axios.defaults.baseURL = BASE_URL;

Axios.defaults.headers.common.Accept = 'application/json';

Vue.$http = Axios;

Axios.interceptors.response.use(
  res => res,
  error => Promise.reject(error),
);

Object.defineProperty(Vue.prototype, '$http', {
  get() {
    return Axios;
  },
});
