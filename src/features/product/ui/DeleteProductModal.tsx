'use client';

import { Button } from '@/shared/ui/button';
import { BaseModal } from '@/shared/ui/Modal/Modal';
import { DialogTitle } from '@/shared/ui/dialog';

interface IProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  isDeleting: boolean;
}

export const DeleteProductModal = ({
  open,
  onOpenChange,
  onConfirm,
  isDeleting,
}: IProps) => {
  return (
    <BaseModal open={open} onOpenChange={onOpenChange} size="sm">
      <DialogTitle>
        <p className="font-bold text-L mb-2">Удалить товар?</p>
      </DialogTitle>

      <div className="flex justify-between gap-2">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => onOpenChange(false)}
          disabled={isDeleting}
        >
          Отмена
        </Button>
        <Button
          variant="destructive"
          className="flex-1"
          onClick={onConfirm}
          disabled={isDeleting}
        >
          {isDeleting ? 'Удаление...' : 'Удалить'}
        </Button>
      </div>
    </BaseModal>
  );
};
