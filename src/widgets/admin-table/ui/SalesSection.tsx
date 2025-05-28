'use client';

import { useOrders } from '@/features/order/api/useCreateOrder';
import { SalesTable } from '@/features/order/ui/SalesTable';
import { aggregateSales } from '../model/aggregateSales';

export const SalesSection = () => {
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

  const aggregatedSales = aggregateSales(orders ?? []);

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
      <h2 className="text-lg font-semibold mt-8 mb-2">Статистика по товарам</h2>
      <SalesTable data={aggregatedSales} />
    </div>
  );
};
