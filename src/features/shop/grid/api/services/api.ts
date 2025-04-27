import { IShopCard } from '@/entities/shop/model/types';

const mockShops: IShopCard[] = [
  {
    id: '1',
    name: 'Все для Бани',
    description:
      'Beautifully designed components built with Radix UI and Tailwind CSS.',
    route: 'banya-world',
  },
  {
    id: '2',
    name: 'Домашний уют',
    description:
      'Beautifully designed components built with Radix UI and Tailwind CSS.',
    route: 'home-cozy',
  },
  {
    id: '3',
    name: 'Ювелирные издания',
    description:
      'Beautifully designed components built with Radix UI and Tailwind CSS.',
  },
];

export const fetchShops = async (): Promise<IShopCard[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockShops), 2000);
  });
};
