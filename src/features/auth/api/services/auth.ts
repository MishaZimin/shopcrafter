import axiosInstance from '@/shared/api/axiosInstance';

export const AuthApi = {
  async sendVerificationCode(email: string) {
    const response = await axiosInstance.post(
      `/auth/login?email=${encodeURIComponent(email)}`,
      null
    );
    return response.data;
  },

  async verifyCode(email: string, code: string) {
    const response = await axiosInstance.post(
      `/auth/verify-code?email=${encodeURIComponent(email)}&code=${code}`,
      null
    );
    return response.data;
  },

  async refreshToken(refreshToken: string) {
    const response = await axiosInstance.post(
      '/auth/refresh',
      { refreshToken },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return response.data;
  },

  async checkAuth() {
    const response = await axiosInstance.get('/auth/check');
    return response.data;
  }
};