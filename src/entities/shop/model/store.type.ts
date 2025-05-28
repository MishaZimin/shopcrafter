export interface IStore {
  id: number;
  ownerId: number;
  workerIds: number[];
  name: string;
  description: string;
  categories: number[];
  imageUrl?: string;
}

export interface IShopCard {
  id: number;
  name: string;
  description: string;
  route: string;
}