import Vue from 'vue';

export default {
  get() {
    return Vue.axios.get('https://conduit.productionready.io/api/tags')
      .catch((error) => {
        throw new Error(error);
      });
  },
};
