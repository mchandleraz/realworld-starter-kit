const axios = require('axios');

export default {
  get() {
    return axios.get('https://conduit.productionready.io/api/articles')
      .catch((error) => {
        throw new Error(error);
      });
  },
};
