import PostsService from '@/services/postsService';
import { FETCH_ARTICLE } from '../actionTypes';
import { SET_ARTICLE } from '../mutationTypes';

export const state = {
  article: [],
};

export const actions = {
  [FETCH_ARTICLE]({ commit }, slug) {
    return PostsService.single(slug)
      .then(({ data }) => {
        commit(SET_ARTICLE, data.article);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_ARTICLE](currentState, data) {
    currentState.article = data;
  },
};

export default {
  state,
  actions,
  mutations,
};
