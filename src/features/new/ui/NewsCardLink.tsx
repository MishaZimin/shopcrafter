'use client';

import { useRouter } from 'next/navigation';
import { NewCard } from '@/entities/new/ui/NewCard';
import { INew } from '@/entities/new/model/types';

interface INewItemCardProps {
  newItem: INew;
}

export const NewsCardLink = ({ newItem }: INewItemCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/news/${newItem.id}`);
    console.log('go new card', newItem.id);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <NewCard newItem={newItem} />
    </div>
  );
};
