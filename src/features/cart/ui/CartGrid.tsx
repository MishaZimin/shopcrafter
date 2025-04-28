'use client';

import ProductImage from '@/shared/assets/ProductImage.svg';
import { CartItem } from './CartItem';

// interface IProps {
//   prop: type;
// }

const cartItems = [
  {
    id: '201',
    name: 'Плед из овечьей шерсти',
    price: '3590 ₽',
    description: 'Тёплый плед ручной работы',
    image: ProductImage,
  },
  {
    id: '202',
    name: 'Деревянная ложка',
    price: '490 ₽',
    description: 'Экологичная посуда из берёзы',
    image: ProductImage,
  },
  {
    id: '203',
    name: 'Плед из овечьей шерсти',
    price: '3590 ₽',
    description: 'Тёплый плед ручной работы',
    image: ProductImage,
  },
  {
    id: '204',
    name: 'Деревянная ложка',
    price: '490 ₽',
    description: 'Экологичная посуда из берёзы',
    image: ProductImage,
  },
  {
    id: '205',
    name: 'Плед из овечьей шерсти',
    price: '3590 ₽',
    description: 'Тёплый плед ручной работы',
    image: ProductImage,
  },
  {
    id: '206',
    name: 'Деревянная ложка',
    price: '490 ₽',
    description: 'Экологичная посуда из берёзы',
    image: ProductImage,
  },
];

export const CartGrid = () => {
  return (
    <div className="flex flex-row gap-4 overflow-y-auto h-[calc(100vh-200px)]">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};
