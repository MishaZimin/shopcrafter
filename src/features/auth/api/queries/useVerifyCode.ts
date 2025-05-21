import { useMutation } from '@tanstack/react-query';
import { AuthApi } from '../services/auth';
import axios from 'axios';

export const useVerifyCode = () => {
  return useMutation({
    mutationFn: ({ email, code }: { email: string; code: string }) =>
      AuthApi.verifyCode(email, code),

    onError: (error) => {
      console.error('Verify code error:', error);
      if (axios.isAxiosError(error)) {
        console.error('Response data:', error.response?.data);
      }
    },
  });
};