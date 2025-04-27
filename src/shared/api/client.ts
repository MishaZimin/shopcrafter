import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const API_URL = 'http://188.225.43.254:8080';

export const apiClient = axios.create({
  baseURL: API_URL,
});

apiClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('authToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (token) {
    const decoded = jwtDecode(token);
    const isExpired = decoded.exp ? decoded.exp * 1000 < Date.now() : false;

    if (isExpired && refreshToken) {
      try {
        const { data } = await axios.post(`${API_URL}/auth/refresh`, {
          refreshToken,
        });
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('refreshToken', data.refreshToken);
        config.headers.Authorization = `Bearer ${data.token}`;
      } catch (error) {
        console.log(error);
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
      }
    } else {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});
