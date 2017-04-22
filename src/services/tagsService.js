const axios = require('axios');

export default {
  get() {
    return axios.get('https://conduit.productionready.io/api/tags')
      .catch((error) => {
        throw new Error(error);
      });
  },
};
