'use client';

import { useOrders } from '@/features/order/api/useCreateOrder';
import { OrdersTable } from '@/features/order/ui/OrdersTable';

export const OrdersSection = () => {
  const { data: orders, isLoading, error } = useOrders();

  if (isLoading) return <div className="p-4">Загрузка заказов...</div>;
  if (error)
    return <div className="p-4 text-red-500">Ошибка: {error.message}</div>;

  const totalOrders = orders?.length ?? 0;

  const totalRevenue =
    orders?.reduce((sum, order) => sum + order.totalAmount, 0) ?? 0;

  const totalProductsSold =
    orders?.reduce((total, order) => {
      return (
        total +
        order.items.reduce((orderTotal, item) => orderTotal + item.quantity, 0)
      );
    }, 0) ?? 0;

  return (
    <div className="py-4">
      <h1 className="text-xl font-bold mb-4">Заказы</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 p-6 bg-slate-50">
        <div className="">
          <p className="text-muted-foreground text-sm">Всего заказов</p>
          <p className="text-xl font-semibold">{totalOrders}</p>
        </div>
        <div className=" ">
          <p className="text-muted-foreground text-sm">Продано товаров</p>
          <p className="text-xl font-semibold">{totalProductsSold}</p>
        </div>
        <div className="">
          <p className="text-muted-foreground text-sm">Общая сумма продаж</p>
          <p className="text-xl font-semibold">{totalRevenue} ₽</p>
        </div>
      </div>

      <OrdersTable orders={orders ?? []} />
    </div>
  );
};
