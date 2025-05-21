import { IShopCard } from '@/entities/shop/model/types';

const mockShops: IShopCard[] = [
  {
    id: '1',
    name: 'Все для Бани',
    description: 'Товары для бани',
    route: 'banya-world',
  },
  {
    id: '2',
    name: 'Домашний уют',
    description: 'Товары для дома',
    route: 'home-cozy',
  },
  {
    id: '3',
    name: 'Ювелирные изделия',
    description: 'Ювелирные изделия',
    route: 'jewelry',
  },
];

export const fetchShops = async (): Promise<IShopCard[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockShops), 300);
  });
};
