'use client';

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/shared/ui/table';

export type AggregatedItem = {
  productId: number;
  productName: string;
  totalQuantity: number;
  totalRevenue: number;
};

export const SalesTable = ({ data }: { data: AggregatedItem[] }) => {
  return (
    <div className=" mt-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Товар</TableHead>
            <TableHead>Кол-во продаж</TableHead>
            {/* <TableHead>Доход</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.productId}>
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.totalQuantity}</TableCell>
              {/* <TableCell>{item.totalRevenue.toFixed(2)} ₽</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
