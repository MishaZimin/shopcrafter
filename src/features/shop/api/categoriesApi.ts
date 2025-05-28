import axiosInstance from '@/shared/api/axiosInstance';

export const CategoriesApi = {
  createCategory: (storeId: number, payload: { name: string }) => {
    return axiosInstance.post(`/stores/${storeId}/categories`, payload);
  },
};
