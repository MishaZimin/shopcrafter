import { updateCurrentUser } from '@/shared/api/user';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: {
  id: number;
  email: string;
  role: string;
  name: string;
  phone: string;
}) => updateCurrentUser(data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },

    onError: (error) => {
      console.error('Ошибка при обновлении профиля:', error);
    },
  });
};