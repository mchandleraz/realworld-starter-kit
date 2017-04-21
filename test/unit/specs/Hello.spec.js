import Vue from 'vue';
import Home from '@/components/Home';

describe('Home.vue', () => {
  it('Has a .home-page wrapper', () => {
    // arrange
    const Constructor = Vue.extend(Home);

    // act
    const vm = new Constructor().$mount();

    // assert
    expect(vm.$el.querySelector('.home-page').length).to.equal(1);
  });
});
