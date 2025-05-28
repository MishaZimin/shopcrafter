'use client';

import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import { Trash2 } from 'lucide-react';
import { DeleteShopModal } from './DeleteShopModal';

interface DeleteStoreButtonProps {
  id: number;
  className?: string;
}

export const DeleteStoreButton = ({
  id,
  className,
}: DeleteStoreButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleClick}
        aria-label="Удалить магазин"
        className={`text-red-500 hover:text-red-600 hover:bg-red-50 ${className}`}
      >
        <Trash2 className="h-4 w-4" />
      </Button>

      <DeleteShopModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        storeId={id}
      />
    </>
  );
};
