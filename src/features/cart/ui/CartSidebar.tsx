'use client';

import { useAtomValue, useSetAtom } from 'jotai';
import { Button } from '@/shared/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/shared/ui/sheet';
import { ScrollArea } from '@/shared/ui/scroll-area';
import { Badge } from '@/shared/ui/badge';
import { CartItemCard } from './CartItemCard';
import { useState } from 'react';

import { useParams } from 'next/navigation';
import { OrderModal } from '@/features/order/ui/OrderModal';
import { useSyncedCart } from '../model/useSyncedCart';
import { CartItem, useStoreCartAtoms } from '../model/cartAtomsMap';

export function CartSidebar() {
  const { store } = useParams();
  const storeId = Number(store);

  useSyncedCart();

  const [open, setOpen] = useState(false);
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);

  const {
    cartAtom,
    totalItemsAtom,
    totalPriceAtom,
    updateQuantityAtom,
    removeFromCartAtom,
  } = useStoreCartAtoms(storeId);

  const cartItems = useAtomValue<CartItem[]>(cartAtom);
  const totalItems = useAtomValue<number>(totalItemsAtom);
  const totalPrice = useAtomValue<number>(totalPriceAtom);
  const updateQuantity = useSetAtom(updateQuantityAtom);
  const removeItem = useSetAtom(removeFromCartAtom);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const item = cartItems.find((item: CartItem) => item.id === id);
    if (!item) return;

    const newQuantity = Math.max(1, Math.min(quantity, item.stock));
    updateQuantity({ id, quantity: newQuantity });
  };

  const handleCheckout = () => {
    const availableItems = cartItems.filter((item) => item.stock > 0);

    const availableTotalPrice = availableItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    console.log('Товары:');
    availableItems.forEach((item) => {
      console.log(
        `- ${item.name} (${item.quantity} шт.) - ${item.price.toLocaleString()} ₽`
      );
    });
    console.log(`Общая сумма: ${availableTotalPrice.toLocaleString()} ₽`);

    setOrderModalOpen(true);
  };

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="relative">
            <p>Корзина</p>
            {totalItems > 0 && (
              <Badge className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                {totalItems}
              </Badge>
            )}
          </Button>
        </SheetTrigger>

        <SheetContent className="w-full md:min-w-[500px] p-8 pt-4">
          <SheetHeader className="p-0 pb-2">
            <SheetTitle className="font-bold text-h3 p-0">Ваш заказ</SheetTitle>
          </SheetHeader>

          <ScrollArea className="h-[calc(100vh-200px)] ">
            <div className="space-y-4">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <CartItemCard
                    key={item.id}
                    item={item}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemove={removeItem}
                  />
                ))
              ) : (
                <p className="text-center py-8 text-muted-foreground">
                  Корзина пуста
                </p>
              )}
            </div>
          </ScrollArea>

          <div className="absolute bottom-8 left-8 right-8 pt-4">
            <div className="flex font-medium mb-4 gap-2 z-30">
              <span className="text-h4">Сумма: </span>
              <span className="text-h4"> {totalPrice.toLocaleString()} ₽</span>
            </div>
            <Button
              className="w-full"
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
            >
              Оформить заказ
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <OrderModal open={isOrderModalOpen} onOpenChange={setOrderModalOpen} />
    </>
  );
}
