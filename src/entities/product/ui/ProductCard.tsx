'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card';
import { IProduct } from '../model/types';
import Image from 'next/image';

interface ShopCardProps {
  product: IProduct;
  actionSlot?: React.ReactNode;
}

export const ProductCard = ({ product, actionSlot }: ShopCardProps) => {
  return (
    <Card className="w-full max-w-md ">
      <CardHeader>
        <Image
          src={product.image}
          alt={'ImageProduct'}
          className="rounded-[5px] w-full"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-2 min-h-[120px]">
        <h3 className="text-L font-semibold line-clamp-1">{product.name}</h3>
        <p className="text-S text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <p className="text-L font-bold">{product.price}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        {actionSlot}
      </CardFooter>
    </Card>
  );
};
