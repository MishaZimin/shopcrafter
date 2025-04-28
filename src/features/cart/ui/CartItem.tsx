'use client';

import { ICartCard } from '@/entities/cart/model/types';
import { CartCard } from '@/entities/cart/ui/CartCard';

interface ICartItemProps {
  cartItem: ICartCard;
}

export const CartItem = ({ cartItem }: ICartItemProps) => {
  return (
    <div className="min-w-[300px]">
      <CartCard cartItem={cartItem} />
    </div>
  );
};
