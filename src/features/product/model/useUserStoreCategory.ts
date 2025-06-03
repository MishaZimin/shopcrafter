'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { StoresApi } from '@/features/shop/api/storesApi';

export const useUserStoreCategory = () => {
  const params = useParams();
  const storeParam = params?.store;

  // const storeId = Number(storeParam);
  const storeName = String(storeParam);

  const { data: storeNameData, isLoading } = useQuery({
    queryKey: ['store', storeName],
    queryFn: () => StoresApi.getStoresByName(storeName),
    enabled: !!storeName,
  });

  // const { data: storeData, isLoading } = useQuery({
  //   queryKey: ['store', storeId],
  //   queryFn: () => StoresApi.getStoresById(storeId),
  //   // queryFn: () => StoresApi.getStoresByName(storeName),
  //   enabled: !!storeId,
  // });

  return {
    store: storeNameData,
    storeName: storeNameData?.description ?? null,
    storeId: storeNameData?.id ?? null,
    categoryId: storeNameData?.categories[0] ?? null,
    isLoading,
  };
};
