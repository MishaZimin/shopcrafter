'use client';

import { useParams } from 'next/navigation';
import { useQuery, useMutation } from '@tanstack/react-query';
import { StoresApi } from '@/features/shop/api/storesApi';
import { CategoriesApi } from '@/features/shop/api/categoriesApi';

export const useStoreCategoryIds = () => {
  const params = useParams();
  const storeId = Number(params?.id);

  const {
    data: storeData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['store', storeId],
    queryFn: () => StoresApi.getStoresById(storeId),
    enabled: !!storeId,
  });

  const createDefaultCategory = useMutation({
    mutationFn: () => CategoriesApi.createCategory(storeId, { name: 'Товары' }),
    onSuccess: () => refetch(),
  });

  const getOrCreateCategory = async () => {
    if (!storeData?.categories?.length) {
      await createDefaultCategory.mutateAsync();
      return (await refetch()).data?.categories?.[0];
    }
    return storeData.categories[0];
  };

  return {
    storeId,
    categoryId: storeData?.categories?.[0],
    isLoading: isLoading || createDefaultCategory.isPending,
    getOrCreateCategory,
  };
};
