import ApiService from '@/services/apiService';

export default {
  get() {
    return ApiService.get('articles');
  },
  single(slug) {
    return ApiService.get('articles', slug);
  },
};
