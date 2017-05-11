/* eslint-disable import/no-webpack-loader-syntax */
import { expect } from 'chai';
import { FETCH_ARTICLES, FETCH_TAGS } from '@/store/actionTypes';
import { SET_ARTICLES, SET_TAGS } from '@/store/mutationTypes';

const homeModuleInjector = require('inject-loader!@/store/modules/home');

const expectedPayload = 'foo!';
const homeModule = homeModuleInjector({
  '@/services/postsService': {
    get() {
      return Promise.resolve({
        data: {
          articles: expectedPayload,
        },
      });
    },
  },
  '@/services/tagsService': {
    get() {
      return Promise.resolve({
        data: {
          tags: expectedPayload,
        },
      });
    },
  },
});
const actions = homeModule.actions;
const mutations = homeModule.mutations;

const testAction = (action, actionPayload, state, expectedMutations, done) => {
  let count = 0;

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count];
    expect(mutation.type).to.equal(type);
    if (payload) {
      expect(mutation.payload).to.deep.equal(payload);
    }
    count += 1;
    if (count >= expectedMutations.length) {
      done();
    }
  };

  // call the action with mocked store and arguments
  action({ commit, state }, actionPayload);

  // check if no mutations should have been dispatched
  if (expectedMutations.length === 0) {
    expect(count).to.equal(0);
    done();
  }
};


describe('Store: Home Module', () => {
  describe('Actions should call appropriate mutations with proper payload: ', () => {
    it('FETCH_ARTICLES action', (done) => {
      testAction(actions[FETCH_ARTICLES], null, {}, [{
        type: SET_ARTICLES, payload: expectedPayload,
      }], done);
    });
    it('FETCH_TAGS action', (done) => {
      testAction(actions[FETCH_TAGS], null, {}, [{
        type: SET_TAGS, payload: expectedPayload,
      }], done);
    });
  });
  describe('Mutations should update state accordingly', () => {
    it('SET_ARTICLES mutation', () => {
      const state = {
        articles: [],
      };
      const payload = ['foo', 'bar', 'baz'];
      mutations[SET_ARTICLES](state, payload);
      expect(state.articles).to.deep.equal(payload);
    });
    it('SET_TAGS mutation', () => {
      const state = {
        tags: [],
      };
      const payload = ['foo', 'bar', 'baz'];
      mutations[SET_TAGS](state, payload);
      expect(state.tags).to.deep.equal(payload);
    });
  });
});
