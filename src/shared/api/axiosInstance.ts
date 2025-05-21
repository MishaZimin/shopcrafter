import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://188.225.43.254:8080',
  headers: {
    Accept: '*/*',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;