import articleService from '@/services/articleService';

describe('article Service', () => {
  describe('get', () => {
    describe('when given no params', () => {
      it('returns all articles', () => {
        articleService.get().then((response) => {
          expect(response.data.articles).to.be.a('array');
        });
      });
    });
  });
});
