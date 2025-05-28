'use client';

import { useRouter } from 'next/navigation';
import { ShopCard } from '@/entities/shop/ui/ShopCard';

import { EditButton } from '../../edit/ui/EditButton';
import { DeleteStoreButton } from '../../delete/ui/DeleteButton';
import { IShopCard } from '@/entities/shop/model/store.type';
import { UpdateNameStoreModal } from '../../edit/ui/UpdateNameStoreModal';
import { Button } from '@/shared/ui/button';
import { useState } from 'react';
import { Pencil } from 'lucide-react';

interface ShopCardLinkProps {
  shopItem: IShopCard;
  actionSlot?: React.ReactNode;
}

export const ShopCardLink = ({ shopItem }: ShopCardLinkProps) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    router.push(`/store-admin/${shopItem.id}/products`);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="cursor-pointer h-full"
        role="link"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      >
        <ShopCard
          shop={shopItem}
          actionSlot={
            <div className="flex gap-2 items-center">
              <EditButton id={shopItem.id} />
              <DeleteStoreButton id={shopItem.id} />
              <Button
                variant={'ghost'}
                className="hover:bg-gray-200"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
              >
                <Pencil className="w-6 h-6" />
              </Button>
            </div>
          }
        />
      </div>

      <UpdateNameStoreModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        initialData={{
          id: shopItem.id,
          name: shopItem.name,
          description: shopItem.description,
        }}
      />
    </>
  );
};
