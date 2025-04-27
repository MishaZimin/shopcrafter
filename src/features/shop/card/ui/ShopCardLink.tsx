'use client';

import { useRouter } from 'next/navigation';
import { ShopCard } from '@/entities/shop/ui/ShopCard';
import { IShopCard } from '@/entities/shop/model/types';
import { EditButton } from '../../edit/ui/EditButton';

interface IShopCardItemProps {
  shopItem: IShopCard;
  actionSlot?: React.ReactNode;
}

export const ShopCardLink = ({ shopItem }: IShopCardItemProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${shopItem.route}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <ShopCard shop={shopItem} actionSlot={<EditButton id={shopItem.id} />} />
    </div>
  );
};
