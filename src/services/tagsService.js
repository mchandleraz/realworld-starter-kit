
import ApiService from '@/services/apiService';

export default {
  get() {
    return ApiService.get('tags');
  },
};
