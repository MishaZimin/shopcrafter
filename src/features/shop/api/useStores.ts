import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { StoresApi } from './storesApi';

export const useStores = () => {
  return useQuery({
    queryKey: ['stores'],
    queryFn: StoresApi.getAllStores,
    staleTime: 5 * 60 * 1000,
  });
};

export const useCreateStore = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (storeData: { name: string; description: string }) =>
      StoresApi.createStore(storeData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stores'] });
    },
  });
};

export const useGetStoreById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => StoresApi.getStoresById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stores'] });
    },
  });
};

export const useGetStoreByIdEnabled = (id: number) => {
  return useQuery({
    queryKey: ['store', id],
    queryFn: () => StoresApi.getStoresById(id),
    enabled: !!id,
  });
};

export const useGetStoreByNameEnabled = (name: string) => {
  return useQuery({
    queryKey: ['store', name],
    queryFn: () => StoresApi.getStoresByName(name),
    enabled: !!name,
  });
};

export const useUpdateStore = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      storeData,
    }: {
      id: number;
      storeData: { name: string; description: string };
    }) => StoresApi.updateStore(id, storeData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stores'] });
    },
  });
};

export const useDeleteStore = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => StoresApi.deleteStore(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stores'] });
    },
  });
};
