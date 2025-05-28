import { useMutation, useQuery } from '@tanstack/react-query';
import { postOrder, OrderRequest, OrderResponse, getOrders } from './orderApi';

export const useOrders = () => {
  return useQuery<OrderResponse[], Error>({
    queryKey: ['orders'],
    queryFn: getOrders,
  });
};

export const useCreateOrder = () => {
  return useMutation<OrderResponse, Error, OrderRequest>({
    mutationFn: postOrder,
  });
};
