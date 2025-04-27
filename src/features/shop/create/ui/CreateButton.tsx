'use client';

import { CreateShopModal } from '@/features/create-shop/ui/CreateShopModal';
import { Button } from '@/shared/ui/button';
import { useState } from 'react';

export const CreateButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button className="gap-2" onClick={() => setOpen(true)}>
        Создать новый магазин
      </Button>
      <CreateShopModal open={open} onOpenChange={setOpen} />
    </>
  );
};
