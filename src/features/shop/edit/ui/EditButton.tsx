'use client';

import { Button } from '@/shared/ui/button';

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        console.log('edit shop', id);
      }}
    >
      Редактировать
    </Button>
  );
};
