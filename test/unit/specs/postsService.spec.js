import postsService from '@/services/postsService';

describe('Posts Service', () => {
  describe('get', () => {
    describe('when given no params', () => {
      it('returns all posts', () => {
        postsService.get().then((response) => {
          expect(response.data.articles).to.be.a('array');
        });
      });
    });
  });
});
