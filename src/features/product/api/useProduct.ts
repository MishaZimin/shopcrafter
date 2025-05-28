import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ProductApi } from './productApi';
import { IProductNew } from '@/entities/product/model/types';
import { useBaseProductMutation } from './useBaseProductMutation';

export const useProducts = (storeId: number, categoryId: number) => {
  return useQuery({
    queryKey: ['products', { storeId, categoryId }],
    queryFn: () => ProductApi.getProducts(storeId, categoryId),
    enabled: !!storeId && !!categoryId,
  });
};

export const useProduct = (
  storeId: number,
  categoryId: number,
  productId: number,
  options?: { enabled?: boolean }
) => {
  return useQuery({
    queryKey: ['product', storeId, categoryId, productId],
    queryFn: () => ProductApi.getProduct(storeId, categoryId, productId),
    enabled: options?.enabled,
  });
};

export const useCreateProduct = (storeId: number, categoryId: number) =>
  useBaseProductMutation({
    storeId,
    categoryId,
    isUpdate: false,
  });

export const useUpdateProduct = (
  storeId: number,
  categoryId: number,
  productId: number
) =>
  useBaseProductMutation({
    storeId,
    categoryId,
    productId,
    isUpdate: true,
  });

export const useDeleteProduct = (storeId: number, categoryId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId: number) =>
      ProductApi.deleteProduct(storeId, categoryId, productId),
    onSuccess: (_, productId) => {
      queryClient.setQueryData<IProductNew[]>(
        ['products', { storeId, categoryId }],
        (old = []) => old.filter((p) => p.id !== productId)
      );
    },
    retry: false,
    onSettled: () => {},
  });
};
