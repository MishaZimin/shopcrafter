'use client';

import {
  CartItem,
  useStoreCartAtoms,
} from '@/features/cart/model/cartAtomsMap';

import { Button } from '@/shared/ui/button';
import { useSetAtom } from 'jotai';
import { useParams } from 'next/navigation';

interface AddCartButtonProps {
  product: Omit<CartItem, 'quantity'>;
}

export const AddCartButton = ({ product }: AddCartButtonProps) => {
  const { store } = useParams();
  const storeId = Number(store);
  console.log(storeId);
  const { addToCartAtom } = useStoreCartAtoms(storeId);
  const addToCart = useSetAtom(addToCartAtom);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Button className="gap-2" onClick={handleClick}>
      Добавить в корзину
    </Button>
  );
};
