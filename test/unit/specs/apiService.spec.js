import ApiService from '@/services/apiService';

describe.only('Api Service', () => {
  describe('get()', () => {
    it('throws an error when resource is missing', () => {
      expect(ApiService.get).to.throw();
    });

    it('fetches the provided resource', () => {
      ApiService.get('articles')
        .then((res) => {
          expect(res.data.articles).to.be.a('array');
        });
    });

    it('fetches a resource with params', () => {
      ApiService.get('articles', '')
        .then((res) => {
          console.log(res)
          expect(res.data.articles).to.be.a('array');
        });
    });
  });
});
