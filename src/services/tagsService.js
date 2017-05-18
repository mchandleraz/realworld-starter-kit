import Vue from 'vue';

export default {
  listTags() {
    return Vue.axios.get('https://conduit.productionready.io/api/tags')
      .catch((error) => {
        throw new Error(error);
      });
  },
};
