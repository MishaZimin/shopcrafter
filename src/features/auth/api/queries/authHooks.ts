import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { login, verifyCode, checkAuth, refreshToken } from './../services/auth';

export const useLogin = () => {
  return useMutation({
    mutationFn: (email: string) => login(email),
  });
};

export const useVerifyCode = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ email, code }: { email: string; code: string }) =>
      verifyCode(email, code),
    onSuccess: (data) => {
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
      router.push('/');
    },
  });
};

export const useCheckAuth = () => {
  return useQuery({
    queryKey: ['auth'],
    queryFn: checkAuth,
    retry: false,
  });
};

export const useRefreshToken = () => {
  return useMutation({
    mutationFn: refreshToken,
    onSuccess: (data) => {
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
    },
  });
};
