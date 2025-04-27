'use client';

import { Card, CardContent, CardFooter } from '@/shared/ui/card';
import { IShopCard } from '../model/types';

interface ShopCardProps {
  shop: IShopCard;
  actionSlot?: React.ReactNode;
}

export const ShopCard = ({ shop, actionSlot }: ShopCardProps) => {
  return (
    <Card className="w-full max-w-md">
      {/* <CardHeader>
        <div className="w-6 h-6 rounded-full bg-graphite"></div>
      </CardHeader> */}
      <CardContent>
        <h3 className="text-L font-semibold mb-2">{shop.name}</h3>
        <p className=" text-S">{shop.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        {actionSlot}
      </CardFooter>
    </Card>
  );
};
