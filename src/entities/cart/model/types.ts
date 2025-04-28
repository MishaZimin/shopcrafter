import { StaticImageData } from 'next/image';

export interface ICartCard {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string | StaticImageData;
}
