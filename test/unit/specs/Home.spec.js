import Vue from 'vue';
import Home from '@/components/Home';

describe('Home.vue', () => {
  it('should mount without errors', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor().$mount();

    expect(vm.$el).to.not.be.null;
  });
});
