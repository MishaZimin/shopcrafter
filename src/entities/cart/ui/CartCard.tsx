'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card';
import { ICartCard } from '../model/types';
import Image from 'next/image';

interface CartCardProps {
  cartItem: ICartCard;
  actionSlot?: React.ReactNode;
}

export const CartCard = ({ cartItem, actionSlot }: CartCardProps) => {
  return (
    <Card className="w-full max-w-md ">
      <CardHeader>
        <Image
          src={cartItem.image}
          alt={'ImageProduct'}
          className="rounded-[5px] w-full"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-2 min-h-[120px]">
        <h3 className="text-L font-semibold line-clamp-1">{cartItem.name}</h3>
        <p className="text-S text-muted-foreground line-clamp-2">
          {cartItem.description}
        </p>
        <p className="text-L font-bold">{cartItem.price}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        {actionSlot}
      </CardFooter>
    </Card>
  );
};
