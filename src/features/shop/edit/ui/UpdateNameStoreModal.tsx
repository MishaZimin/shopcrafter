'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { BaseModal } from '@/shared/ui/Modal/Modal';
import { DialogTitle } from '@/shared/ui/dialog';

import { useUpdateStore } from '../../api/useStores';
import {
  CreateShopFormValues,
  createShopSchema,
} from '../../create/model/createShopSchema';

interface EditShopModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData: {
    id: number;
    name: string;
    description: string;
  };
}

export const UpdateNameStoreModal = ({
  open,
  onOpenChange,
  initialData,
}: EditShopModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateShopFormValues>({
    resolver: zodResolver(createShopSchema),
    defaultValues: {
      name: initialData.name,
      description: initialData.description,
    },
  });

  const updateStoreMutation = useUpdateStore();

  const onSubmit = async (data: CreateShopFormValues) => {
    try {
      await updateStoreMutation.mutateAsync({
        id: initialData.id,
        storeData: {
          name: data.name,
          description: data.description || '',
        },
      });
      onOpenChange(false);
      reset();
    } catch (error) {
      console.error('ошибка при обновлении магазина:', error);
    }
  };

  return (
    <BaseModal open={open} onOpenChange={onOpenChange} size="sm">
      <DialogTitle asChild>
        <VisuallyHidden>Редактирование магазина</VisuallyHidden>
      </DialogTitle>

      <div className="relative">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <h1 className="text-h5">Редактировать магазин</h1>
          </div>

          <div className="grid gap-2">
            <label className="text-S font-medium" htmlFor="name">
              Название магазина
            </label>
            <Input
              id="name"
              {...register('name')}
              placeholder="Введите название"
            />
            {errors.name && (
              <p className="text-S text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <label className="text-S font-medium" htmlFor="description">
              Описание
            </label>
            <Input
              id="description"
              {...register('description')}
              placeholder="Краткое описание магазина"
            />
          </div>

          <div className="flex justify-between pt-4 gap-2">
            <Button
              variant="outline"
              type="button"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Отмена
            </Button>
            <Button
              type="submit"
              className="bg-[#0A0F1C] text-white hover:bg-[#1A1F2C] flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Сохранение...' : 'Сохранить'}
            </Button>
          </div>
        </form>
      </div>
    </BaseModal>
  );
};
