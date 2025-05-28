'use client';

import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import { CreateOrEditProductModal } from '@/features/product/ui/CreateOrEditProductModal';
import { useStoreCategoryIds } from '../model/useStoreCategoryIds';

export const AddProductButton = () => {
  const [open, setOpen] = useState(false);
  const { storeId, categoryId, isLoading, getOrCreateCategory } =
    useStoreCategoryIds();

  const handleOpen = async () => {
    if (!categoryId) {
      await getOrCreateCategory();
    }
    setOpen(true);
  };

  return (
    <>
      <Button
        variant="outline"
        onClick={handleOpen}
        disabled={!storeId || isLoading}
      >
        {isLoading ? 'Загрузка...' : 'Добавить товар'}
      </Button>

      {storeId && (
        <CreateOrEditProductModal
          open={open}
          onOpenChange={setOpen}
          storeId={storeId}
          categoryId={categoryId}
        />
      )}
    </>
  );
};
