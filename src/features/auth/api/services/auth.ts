import { apiClient } from '@/shared/api/client';

interface AuthResponse {
  token: string;
  refreshToken: string;
}

export const login = async (email: string) => {
  return apiClient.post('/auth/login', { email });
};

export const verifyCode = async (
  email: string,
  code: string,
): Promise<AuthResponse> => {
  const { data } = await apiClient.post<AuthResponse>('/auth/verify-code', {
    email,
    code,
  });
  return data;
};

export const refreshToken = async (): Promise<AuthResponse> => {
  const refreshToken = localStorage.getItem('refreshToken');
  const { data } = await apiClient.post<AuthResponse>('/auth/refresh', {
    refreshToken,
  });
  return data;
};

export const checkAuth = async (): Promise<boolean> => {
  try {
    await apiClient.get('/auth/check');
    return true;
  } catch {
    return false;
  }
};
