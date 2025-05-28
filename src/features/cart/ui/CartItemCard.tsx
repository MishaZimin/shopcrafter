'use client';

import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { CartItem } from '../model/cartAtomsMap';
import { cn } from '@/shared/lib/utils';

interface CartItemCardProps {
  item: CartItem;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export function CartItemCard({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemCardProps) {
  const isOutOfStock = item.stock <= 0;

  const handleDecrease = () => {
    if (isOutOfStock) return;
    const newQuantity = item.quantity - 1;
    if (newQuantity >= 1) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  const handleIncrease = () => {
    if (isOutOfStock) return;
    const newQuantity = item.quantity + 1;
    if (newQuantity <= item.stock) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div
      className={cn(
        'flex flex-row items-start gap-4 p-6 rounded-[5px] w-full relative',
        isOutOfStock ? 'bg-gray-100' : 'bg-slate-50'
      )}
    >
      {isOutOfStock && (
        <div className="absolute inset-0 bg-gray-200/70 flex items-center justify-center rounded-[5px] z-10">
          <div className="text-lg font-bold text-gray-600  px-4 py-2 rounded flex flex-col gap-2">
            <p>Разобрали</p>
            <Button variant="ghost" size="sm" onClick={() => onRemove(item.id)}>
              Удалить
            </Button>
          </div>
        </div>
      )}

      {item.imageUrl && (
        <Image
          src={item.imageUrl}
          alt={item.name}
          width={178}
          height={178}
          className={cn(
            'max-h-[178px] min-h-[178px] max-w-[178px] min-w-[178px] rounded object-cover',
            isOutOfStock ? 'opacity-50' : ''
          )}
        />
      )}
      <div className="flex flex-col justify-between h-[178px] w-full">
        <div className="flex flex-col flex-1 gap-[4px]">
          <h3
            className={cn(
              'text-h5 font-bold line-clamp-2',
              isOutOfStock ? 'text-gray-500' : ''
            )}
          >
            {item.name}
          </h3>
          <p
            className={cn(
              'font-medium line-clamp-1',
              isOutOfStock ? 'text-gray-400' : ''
            )}
          >
            {item.description}
          </p>
          <p
            className={cn(
              'text-h4 font-bold ',
              isOutOfStock ? 'text-gray-500' : ''
            )}
          >
            {item.price.toLocaleString()} ₽ × {item.quantity}
          </p>
          {!isOutOfStock && (
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="xsm"
                onClick={handleDecrease}
                disabled={item.quantity <= 1}
              >
                -
              </Button>
              <span>{item.quantity}</span>
              <Button
                variant="ghost"
                size="xsm"
                onClick={handleIncrease}
                disabled={item.quantity >= item.stock}
              >
                +
              </Button>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className={cn(isOutOfStock ? 'text-gray-400' : 'text-destructive')}
          onClick={() => onRemove(item.id)}
          disabled={isOutOfStock}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
}
