import Vue from 'vue';
// import Buefy from 'buefy';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import NProgress from 'vue-nprogress';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';
// import './registerServiceWorker';
import router from './router';
import store from './store';
import './plugins/axios';

const nprogress = new NProgress({ parent: '.nprogress-container' });

Vue.use(NProgress);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
// import 'buefy/dist/buefy.css';
// Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  nprogress,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
