import Vue from 'vue';
import API_URL from '@/constants';

export default class ApiService {

  static get(resource, params = '') {
    return Vue.axios
      .get(`${API_URL}/${resource}/${params}`)
      .catch((error) => {
        throw new Error(error);
      });
  }
}
