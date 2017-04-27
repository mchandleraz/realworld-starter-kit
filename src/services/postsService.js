import Vue from 'vue';

export default {
  get() {
    return Vue.axios.get('https://conduit.productionready.io/api/articles')
      .catch((error) => {
        throw new Error(error);
      });
  },
};
