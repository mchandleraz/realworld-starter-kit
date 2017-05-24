import Vue from 'vue';
import ApiService from '@/services/apiService';

export default {
  get() {
    return Vue.axios.get('https://conduit.productionready.io/api/articles')
      .catch((error) => {
        throw new Error(error);
      });
  },
  single(slug) {
    return ApiService.get('articles', slug);
  },
};
