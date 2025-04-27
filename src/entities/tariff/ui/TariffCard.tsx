'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card';
import { ITariff } from '../model/types';

interface ShopCardProps {
  tariff: ITariff;
  actionSlot?: React.ReactNode;
}

export const TariffCard = ({ tariff, actionSlot }: ShopCardProps) => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="w-6 h-6 rounded-full bg-graphite"></div>
      </CardHeader>
      <CardContent>
        <h3 className="text-L font-semibold mb-2">{tariff.name}</h3>
        <p className=" text-S mb-2">{tariff.description}</p>
        <p className=" text-h4 mb-6">{tariff.price}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        {actionSlot}
      </CardFooter>
    </Card>
  );
};
