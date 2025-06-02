'use client';

import { Button } from '@/shared/ui/button';
import { useAppRouter } from '@/shared/lib/navigation';

export const EditButton = ({ id }: { id: number }) => {
  const { router } = useAppRouter();

  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        // router.push(`/shops/${id}/edit`);

        router.push(`/store-admin/${id}/products`);
        console.log('edit shop', id);
      }}
    >
      Редактировать
    </Button>
  );
};
