import Vue from 'vue';

export default {
  list() {
    return Vue.axios.get('https://conduit.productionready.io/api/articles')
      .catch((error) => {
        throw new Error(error);
      });
  },

  getArticle(slug) {
    return Vue.axios.get(`https://conduit.productionready.io/api/articles/${slug}`)
      .catch((error) => {
        throw new Error(error);
      });
  },
};
