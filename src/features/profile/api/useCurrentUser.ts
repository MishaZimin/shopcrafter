import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '@/shared/api/user';

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUser,
  });
};