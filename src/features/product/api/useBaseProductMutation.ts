import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ProductApi } from './productApi';

type ProductPayload = {
  name: string;
  description: string;
  price: number;
  stock: number;
  image: File;
};

export const useBaseProductMutation = ({
  storeId,
  categoryId,
  productId,
  isUpdate,
}: {
  storeId: number;
  categoryId: number;
  productId?: number;
  isUpdate: boolean;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: ProductPayload) => {
      const { image, ...productData } = payload;

      const product = isUpdate
        ? await ProductApi.updateProduct(
            storeId,
            categoryId,
            productId!,
            productData
          )
        : await ProductApi.createProduct(storeId, categoryId, productData);

      await ProductApi.uploadImage(storeId, categoryId, product.id, image);

      return product;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products', { storeId, categoryId }],
      });

      if (isUpdate && productId !== undefined) {
        queryClient.invalidateQueries({
          queryKey: ['product', storeId, categoryId, productId],
        });
      }
    },
  });
};
