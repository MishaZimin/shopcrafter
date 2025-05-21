import { useMutation } from '@tanstack/react-query';
import { AuthApi } from '../services/auth';

export const useSendVerificationCode = () => {
  return useMutation({
    mutationFn: (email: string) => AuthApi.sendVerificationCode(email),
  });
};