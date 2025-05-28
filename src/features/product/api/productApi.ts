import axiosInstance from '@/shared/api/axiosInstance';

export const ProductApi = {
  async getProducts(storeId: number, categoryId: number) {
    const response = await axiosInstance.get(
      `/stores/${storeId}/categories/${categoryId}/products`
    );
    return response.data;
  },

  async getProduct(storeId: number, categoryId: number, productId: number) {
    const response = await axiosInstance.get(
      `/stores/${storeId}/categories/${categoryId}/products/${productId}`
    );
    return response.data;
  },

  async createProduct(
    storeId: number,
    categoryId: number,
    payload: {
      name: string;
      description: string;
      price: number;
      stock: number;
    }
  ) {
    const response = await axiosInstance.post(
      `/stores/${storeId}/categories/${categoryId}/products`,
      payload
    );
    return response.data;
  },

  async updateProduct(
    storeId: number,
    categoryId: number,
    productId: number,
    payload: {
      name: string;
      description: string;
      price: number;
      stock: number;
    }
  ) {
    const response = await axiosInstance.put(
      `/stores/${storeId}/categories/${categoryId}/products/${productId}`,
      payload
    );
    return response.data;
  },

  async deleteProduct(storeId: number, categoryId: number, productId: number) {
    const response = await axiosInstance.delete(
      `/stores/${storeId}/categories/${categoryId}/products/${productId}`,
      {
        headers: { 'Cache-Control': 'no-cache' },
        params: { timestamp: Date.now() },
      }
    );
    return { ...response.data, deletedId: productId };
  },

  async uploadImage(
    storeId: number,
    categoryId: number,
    productId: number,
    file: File
  ) {
    const generateEnglishName = () => {
      const timestamp = Date.now();
      return `image_${timestamp}`;
    };

    const renamedFile = new File([file], generateEnglishName(), {
      type: file.type,
    });

    const formData = new FormData();
    formData.append('files', renamedFile);

    try {
      const response = await axiosInstance.post(
        `/stores/${storeId}/categories/${categoryId}/products/${productId}/images`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('error', error);
    }
  },
};
