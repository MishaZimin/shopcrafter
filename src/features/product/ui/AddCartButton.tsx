'use client';

import { Button } from '@/shared/ui/button';

export const AddCartButton = ({ productId }: { productId: string }) => {
  console.log(productId);

  return (
    <>
      <Button
        className="gap-2"
        onClick={(e) => {
          e.stopPropagation();

          console.log('add cart', productId);
        }}
      >
        Добавить в корзину
      </Button>
    </>
  );
};
