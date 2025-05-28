import { IShopCard, IStore } from '@/entities/shop/model/store.type';

export const convertStoreToShopCard = (store: IStore): IShopCard => {
  return {
    id: store.id,
    name: store.name,
    description: store.description,
    route: `store-admin/${store.id}/products`,
  };
};
