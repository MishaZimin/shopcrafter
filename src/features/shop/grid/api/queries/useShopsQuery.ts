import { useQuery } from '@tanstack/react-query';
import { fetchShops } from '../services/api';

export const useShopsQuery = () => {
  return useQuery({
    queryKey: ['shops'],
    queryFn: fetchShops,
  });
};
