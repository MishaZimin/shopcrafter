'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { StoresApi } from '@/features/shop/api/storesApi';

export const useUserStoreCategory = () => {
  const params = useParams();
  const storeParam = params?.store;

  const storeId = Number(storeParam);

  const { data: storeData, isLoading } = useQuery({
    queryKey: ['store', storeId],
    queryFn: () => StoresApi.getStoresById(storeId),
    enabled: !!storeId,
  });

  return {
    storeId: storeData?.id ?? null,
    categoryId: storeData?.categories[0] ?? null,
    isLoading,
  };
};
