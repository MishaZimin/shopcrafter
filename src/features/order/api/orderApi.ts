import axiosInstance from '@/shared/api/axiosInstance';
import { OrderFormValues } from '../model/orderSchema';

export interface ProductItem {
  productId: number;
  quantity: number;
  productName: string;
}

export interface OrderRequest {
  products: ProductItem[];
  customerInfo: OrderFormValues;
}

export interface OrderResponse {
  id: number;
  createdAt: string;
  status: string;
  items: ProductItem[];
  totalAmount: number;
  customerInfo: OrderFormValues;
}

export const postOrder = async (
  orderData: OrderRequest
): Promise<OrderResponse> => {
  const response = await axiosInstance.post<OrderResponse>(
    '/orders',
    orderData
  );
  return response.data;
};

export const getOrders = async (): Promise<OrderResponse[]> => {
  const response = await axiosInstance.get<OrderResponse[]>('/orders');
  return response.data;
};
