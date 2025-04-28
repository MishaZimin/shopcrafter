'use client';

import { CartGrid } from '@/features/cart/ui/CartGrid';
import { ProceedOfCheckoutButton } from '@/features/cart/ui/ProceedOfCheckout';

export const CartSection = () => {
  return (
    <div className="flex flex-col gap-4 w-full pt-2">
      <div className="flex flex-row w-full justify-between">
        <h2 className="text-2xl font-bold">Корзина</h2>
        <ProceedOfCheckoutButton />
      </div>
      <CartGrid />
    </div>
  );
};
