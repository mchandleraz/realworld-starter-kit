import PostsService from '@/services/postsService';
import TagsService from '@/services/tagsService';
import { FETCH_ARTICLES, FETCH_TAGS } from '../actionTypes';
import { SET_ARTICLES, SET_TAGS } from '../mutationTypes';

export const state = {
  tags: [],
  articles: [],
};

export const actions = {
  [FETCH_ARTICLES]({ commit }) {
    return PostsService.get()
      .then(({ data }) => {
        commit(SET_ARTICLES, data.articles);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  [FETCH_TAGS]({ commit }) {
    return TagsService.get()
      .then(({ data }) => {
        commit(SET_TAGS, data.tags);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_ARTICLES](currentState, articles) {
    currentState.articles = articles;
  },
  [SET_TAGS](currentState, tags) {
    currentState.tags = tags;
  },
};

export default {
  state,
  actions,
  mutations,
};
