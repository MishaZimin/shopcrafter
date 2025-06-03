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
  paymentUrl: string;
}

export const postOrder = async (
  orderData: OrderRequest
): Promise<OrderResponse> => {
  try {
    const response = await axiosInstance.post<OrderResponse>(
      '/orders',
      orderData
    );

    if (response.data.paymentUrl) {
      window.open(response.data.paymentUrl, '_blank', 'noopener,noreferrer');
    } else {
      console.error('Payment URL not found in response');
    }

    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};
export const getOrders = async (): Promise<OrderResponse[]> => {
  const response = await axiosInstance.get<OrderResponse[]>('/orders');
  return response.data;
};
