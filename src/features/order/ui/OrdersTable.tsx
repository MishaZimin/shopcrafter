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
import { BaseModal } from '@/shared/ui/Modal/Modal';
import { useState } from 'react';

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

interface OrderProductItem {
  productId: number;
  quantity: number;
  productName: string;
  productPrice?: number;
}

export const OrdersTable = ({ orders }: { orders: Order[] }) => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const sortedOrders = [...orders].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

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
          {sortedOrders.map((order) => (
            <TableRow
              key={order.id}
              onClick={() => setSelectedOrder(order)}
              className="cursor-pointer hover:bg-gray-50"
            >
              <TableCell>
                {order.items.map((item: ProductItem) => (
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

      <BaseModal
        open={!!selectedOrder}
        onOpenChange={(open) => !open && setSelectedOrder(null)}
        size="md"
      >
        {selectedOrder && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">
              Детали заказа #{selectedOrder.id}
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-medium mb-2">Информация о покупателе</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-muted-foreground">Имя:</span>{' '}
                    {selectedOrder.customerInfo.name}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Телефон:</span>{' '}
                    {selectedOrder.customerInfo.phone}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Email:</span>{' '}
                    {selectedOrder.customerInfo.email}
                  </p>
                  {selectedOrder.customerInfo.messengerLink && (
                    <p>
                      <span className="text-muted-foreground">Мессенджер:</span>{' '}
                      {selectedOrder.customerInfo.messengerLink}
                      {/* <a
                        href={selectedOrder.customerInfo.messengerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        ссылка
                      </a> */}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Доставка и оплата</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-muted-foreground">
                      Способ доставки:
                    </span>{' '}
                    {selectedOrder.customerInfo.deliveryType === 'PICKUP'
                      ? 'Самовывоз'
                      : 'Доставка'}
                  </p>
                  {selectedOrder.customerInfo.deliveryType !== 'PICKUP' && (
                    <>
                      <p>
                        <span className="text-muted-foreground">Город:</span>{' '}
                        {selectedOrder.customerInfo.city}
                      </p>
                      <p>
                        <span className="text-muted-foreground">Адрес:</span>{' '}
                        {selectedOrder.customerInfo.address}
                      </p>
                    </>
                  )}
                  <p>
                    <span className="text-muted-foreground">
                      Способ оплаты:
                    </span>{' '}
                    {selectedOrder.customerInfo.paymentType === 'CASH'
                      ? 'Наличные'
                      : 'Картой онлайн'}
                  </p>
                  {selectedOrder.customerInfo.comment && (
                    <p>
                      <span className="text-muted-foreground">
                        Комментарий:
                      </span>{' '}
                      {selectedOrder.customerInfo.comment}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Товары в заказе</h3>
              <div className="border rounded-md divide-y">
                {selectedOrder.items.map((item: OrderProductItem) => (
                  <div
                    key={item.productId}
                    className="p-3 flex justify-between"
                  >
                    <div>
                      {item.productName} × {item.quantity}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2 text-right font-bold">
                Итого: {selectedOrder.totalAmount} ₽
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>Статус: {selectedOrder.status}</p>
              <p>
                Дата заказа:{' '}
                {new Date(selectedOrder.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        )}
      </BaseModal>
    </div>
  );
};
