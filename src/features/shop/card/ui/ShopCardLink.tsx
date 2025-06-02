'use client';

import { useRouter } from 'next/navigation';
import { ShopCard } from '@/entities/shop/ui/ShopCard';

import { EditButton } from '../../edit/ui/EditButton';
import { IShopCard } from '@/entities/shop/model/store.type';
import { UpdateNameStoreModal } from '../../edit/ui/UpdateNameStoreModal';
import { Button } from '@/shared/ui/button';
import { useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { DeleteShopModal } from '../../delete/ui/DeleteShopModal';

interface ShopCardLinkProps {
  shopItem: IShopCard;
  actionSlot?: React.ReactNode;
}

export const ShopCardLink = ({ shopItem }: ShopCardLinkProps) => {
  const router = useRouter();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleClick = () => {
    router.push(`/${shopItem.id}`);
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
            <div className="flex gap-2 items-center flex-row justify-between w-full">
              <EditButton id={shopItem.id} />
              <div className="flex flex-row gap-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gray-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsEditModalOpen(true);
                  }}
                >
                  <Pencil className="w-6 h-6" />
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDeleteModalOpen(true);
                  }}
                  className="text-red-500 hover:text-red-600 hover:bg-red-100"
                  aria-label="Удалить магазин"
                >
                  <Trash2 className="w-6 h-6" />
                </Button>
              </div>
            </div>
          }
        />
      </div>

      <UpdateNameStoreModal
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        initialData={{
          id: shopItem.id,
          name: shopItem.name,
          description: shopItem.description,
        }}
      />
      <DeleteShopModal
        open={isDeleteModalOpen}
        onOpenChange={setIsDeleteModalOpen}
        storeId={shopItem.id}
      />
    </>
  );
};
