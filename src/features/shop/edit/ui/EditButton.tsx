'use client';

import { Button } from '@/shared/ui/button';
import { useAppRouter } from '@/shared/lib/navigation';

export const EditButton = ({ id }: { id: string }) => {
  const { router } = useAppRouter();

  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        router.push(`/my-shops/${id}/edit`);
        console.log('edit shop', id);
      }}
    >
      Редактировать
    </Button>
  );
};
