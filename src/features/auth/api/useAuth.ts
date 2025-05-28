import { useMutation, useQuery } from '@tanstack/react-query';
import { AuthApi } from './authApi';

export const useSendVerificationCode = () => {
  return useMutation({
    mutationFn: AuthApi.sendVerificationCode,
  });
};

export const useVerifyCode = () => {
  return useMutation({
    mutationFn: ({ email, code }: { email: string; code: string }) =>
      AuthApi.verifyCode(email, code),
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.jwtToken);
      localStorage.setItem('refreshToken', data.refreshToken);
    },
  });
};

export const useCheckAuth = () => {
  return useQuery({
    queryKey: ['auth'],
    queryFn: AuthApi.checkAuth,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    retry: (failureCount, error: any) => {
      if (error?.response?.status === 401) return false;
      return failureCount < 3;
    },
  });
};

export const useRefreshToken = () => {
  return useMutation({
    mutationFn: () => {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) throw new Error('no refresh token');
      return AuthApi.refreshToken(refreshToken);
    },
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.jwtToken);
      localStorage.setItem('refreshToken', data.refreshToken);
    },
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: async () => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
  });
};
