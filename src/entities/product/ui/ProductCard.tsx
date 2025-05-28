'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card';
import { IProductNew } from '../model/types';
import Image from 'next/image';

interface ShopCardProps {
  product: IProductNew;
  actionSlot?: React.ReactNode;
}

export const ProductCard = ({ product, actionSlot }: ShopCardProps) => {
  console.log(product);
  return (
    <Card className="w-full gap-0">
      <CardHeader className="pb-4">
        <div className="relative w-full aspect-square">
          <Image
            src={String(product.imageUrls[product.imageUrls.length - 1])}
            alt="ImageProduct"
            fill
            className="rounded-[5px] object-cover"
            sizes="100vw"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 min-h-[120px]">
        <h3 className="text-L font-semibold line-clamp-1">{product.name}</h3>
        <p className="text-S text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <p className="text-L font-bold">{product.price} ₽</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        {actionSlot}
      </CardFooter>
    </Card>
  );
};
