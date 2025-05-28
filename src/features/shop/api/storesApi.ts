import axiosInstance from '@/shared/api/axiosInstance';

export const StoresApi = {
  async getAllStores() {
    const response = await axiosInstance.get('/users/me/stores');
    return response.data;
  },

  async getStoresById(id: number) {
    const response = await axiosInstance.get(`/stores/${id}`);
    return response.data;
  },

  async createStore(storeData: { name: string; description: string }) {
    const response = await axiosInstance.post('/stores', storeData);
    const storeId = response.data.id;

    await axiosInstance.post(`/stores/${storeId}/categories`, {
      name: 'Товары',
    });

    return response.data;
  },

  async updateStore(
    id: number,
    storeData: { name: string; description: string }
  ) {
    const response = await axiosInstance.put(`/stores/${id}`, storeData);
    return response.data;
  },

  async deleteStore(id: number) {
    const response = await axiosInstance.delete(`/stores/${id}`);
    return response.data;
  },
};
