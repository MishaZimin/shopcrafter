import CustomLogo1 from '@/shared/assets/CustomLogo1.svg';
import CustomLogo2 from '@/shared/assets/CustomLogo2.png';
import ProductImage from '@/shared/assets/ProductImage.svg';
import CardImage from '@/shared/assets/CardImage.png';
import { StaticImageData } from 'next/image';
import { IProduct } from '@/entities/product/model/types';

export interface IShop {
  id: string;
  slug: string;
  name: string;
  logo: string | StaticImageData;
  products: IProduct[];
}

export const MOCK_SHOPS: IShop[] = [
  {
    id: '1',
    slug: 'banya-world',
    name: 'Мир Бани',
    logo: CustomLogo1,
    products: [
      {
        id: '101',
        name: 'Дубовый веник',
        price: '790 ₽',
        description: 'Классический банный веник из дуба',
        image: ProductImage,
      },
      {
        id: '102',
        name: 'Шапка для бани',
        price: '290 ₽',
        description: 'Царская шапка из войлока',
        image: ProductImage,
      },
    ],
  },
  {
    id: '2',
    slug: 'home-cozy',
    name: '',
    logo: CustomLogo2,
    products: [
      {
        id: '201',
        name: 'Плед из овечьей шерсти',
        price: '3590 ₽',
        description: 'Тёплый плед ручной работы',
        image: CardImage,
      },
      {
        id: '202',
        name: 'Деревянная ложка',
        price: '490 ₽',
        description: 'Экологичная посуда из берёзы',
        image: CardImage,
      },
    ],
  },
];
