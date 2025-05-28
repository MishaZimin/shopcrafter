export interface IProductNew {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  imageUrls: string[];
}

export type ICreateProductDto = Omit<
  IProductNew,
  'id' | 'category' | 'imageUrls'
>;
export type IUpdateProductDto = Partial<ICreateProductDto>;
