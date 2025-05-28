/* eslint-disable @typescript-eslint/no-explicit-any */
import { AggregatedItem } from '@/features/order/ui/SalesTable';

export const aggregateSales = (orders: any[]): AggregatedItem[] => {
  const map = new Map<number, AggregatedItem>();

  for (const order of orders) {
    const totalItems = order.items.reduce(
      (sum: number, i: any) => sum + i.quantity,
      0
    );
    const unitPrice = order.totalAmount / totalItems;

    for (const item of order.items) {
      const existing = map.get(item.productId);

      if (existing) {
        existing.totalQuantity += item.quantity;
        existing.totalRevenue += unitPrice * item.quantity;
      } else {
        map.set(item.productId, {
          productId: item.productId,
          productName: item.productName,
          totalQuantity: item.quantity,
          totalRevenue: unitPrice * item.quantity,
        });
      }
    }
  }

  return Array.from(map.values());
};
