'use client';

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/shared/ui/table';
import { ProductItem } from '../api/orderApi';

export interface CustomerInfo {
  name: string;
  phone: string;
  email: string;
  messengerLink?: string;
  deliveryType: 'PICKUP' | 'DELIVERY' | string;
  city?: string;
  address: string;
  paymentType?: 'CASH' | 'ONLINE_CARD';
  comment?: string;
}

export interface Order {
  id: number;
  createdAt: string;
  status: 'CREATED' | string;
  totalAmount: number;
  items: ProductItem[];
  customerInfo: CustomerInfo;
}

export const OrdersTable = ({ orders }: { orders: Order[] }) => {
  return (
    <div className="">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Товары</TableHead>
            <TableHead>Сумма</TableHead>
            <TableHead>Дата</TableHead>
            <TableHead>Покупатель</TableHead>
            <TableHead>Статус</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>
                {order.items.map((item) => (
                  <div key={item.productId}>
                    {item.productName} × {item.quantity}
                  </div>
                ))}
              </TableCell>
              <TableCell>{order.totalAmount} ₽</TableCell>
              <TableCell>
                {new Date(order.createdAt).toLocaleString()}
              </TableCell>
              <TableCell>
                <div className="font-medium">{order.customerInfo.name}</div>
                <div className="text-sm text-muted-foreground">
                  {order.customerInfo.phone}
                </div>
              </TableCell>
              <TableCell>{order.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
