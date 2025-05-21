import axiosInstance from '../api/axiosInstance';

export const getCurrentUser = async () => {
  const response = await axiosInstance.get('/users/me');
  return response.data;
};

export const updateCurrentUser = async (data: {
  id: number;
  email: string;
  role: string;
  name: string;
  phone: string;
}) => {
  const response = await axiosInstance.put('/users/me', data);
  return response.data;
};