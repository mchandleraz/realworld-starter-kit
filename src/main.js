// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import moment from 'moment';


import App from './App';
import router from './router';
import store from './store';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

Vue.filter('date', date => moment(date).format('MMMM DD, YYYY'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
});
