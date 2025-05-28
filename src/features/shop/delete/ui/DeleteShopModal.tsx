'use client';

import { useDeleteStore } from '../../api/useStores';
import { Button } from '@/shared/ui/button';
import { BaseModal } from '@/shared/ui/Modal/Modal';
import { DialogTitle } from '@/shared/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface DeleteShopModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  storeId: number;
}

export const DeleteShopModal = ({
  open,
  onOpenChange,
  storeId,
}: DeleteShopModalProps) => {
  const deleteStore = useDeleteStore();

  const handleDelete = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();

    deleteStore.mutate(storeId, {
      onSuccess: () => {
        console.log('Магазин удалён');
        onOpenChange(false);
      },
      onError: () => {
        console.log('Ошибка при удалении магазина');
      },
    });
  };

  return (
    <BaseModal open={open} onOpenChange={onOpenChange} size="sm">
      <DialogTitle asChild>
        <VisuallyHidden>Удаление магазина</VisuallyHidden>
      </DialogTitle>

      <div className="relative">
        <p className="font-bold">Удалить магазин?</p>

        <div className="flex justify-between pt-4 gap-2">
          <Button
            variant="outline"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenChange(false);
            }}
            className="flex-1"
          >
            Отмена
          </Button>
          <Button
            type="button"
            variant="destructive"
            className="bg-[#0A0F1C] text-white hover:bg-[#1A1F2C] flex-1"
            onClick={handleDelete}
            disabled={deleteStore.isPending}
          >
            {deleteStore.isPending ? 'Удаление...' : 'Удалить'}
          </Button>
        </div>
      </div>
    </BaseModal>
  );
};
