import { StaticImageData } from 'next/image';

export interface IProduct {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string | StaticImageData;
}
