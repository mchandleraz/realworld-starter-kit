import UsersService from '@/services/usersService';
import { GET_USER, FETCH_USER_ARTICLES, FETCH_USER_FAVORITES } from '../actionTypes';
import { SET_USER, SET_USER_ARTICLES, SET_USER_FAVORITES } from '../mutationTypes';

export const state = {
  profile: [],
  articles: [],
  favoriteArticles: [],
};

export const actions = {
  [GET_USER]({ commit }, payload) {
    return UsersService.getUser(payload.user)
      .then(({ data }) => {
        commit(SET_USER, data.profile);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  [FETCH_USER_ARTICLES]({ commit }, payload) {
    return UsersService.getUserArticles(payload.user)
      .then(({ data }) => {
        commit(SET_USER_ARTICLES, data.articles);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  [FETCH_USER_FAVORITES]({ commit }, payload) {
    return UsersService.getUserFavorites(payload.user)
      .then(({ data }) => {
        commit(SET_USER_FAVORITES, data.articles);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};

export const mutations = {
  [SET_USER](currentState, profile) {
    currentState.profile = profile;
  },
  [SET_USER_ARTICLES](currentState, articles) {
    currentState.articles = articles;
  },
  [SET_USER_FAVORITES](currentState, articles) {
    currentState.favoriteArticles = articles;
  },
};

export default {
  state,
  actions,
  mutations,
};
