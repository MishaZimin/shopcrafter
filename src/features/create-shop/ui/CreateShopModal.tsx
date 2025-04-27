'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { BaseModal } from '@/shared/ui/Modal/Modal';
import { DialogTitle } from '@/shared/ui/dialog';

const formSchema = z.object({
  name: z.string().min(1, 'Название обязательно'),
});

type FormValues = z.infer<typeof formSchema>;

interface CreateShopModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateShopModal = ({
  open,
  onOpenChange,
}: CreateShopModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '' },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Создан магазин:', data.name);
    onOpenChange(false);
    reset();
  };

  return (
    <BaseModal open={open} onOpenChange={onOpenChange} size="sm">
      <DialogTitle asChild>
        <VisuallyHidden>Создание магазина</VisuallyHidden>
      </DialogTitle>

      <div className="relative">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <h1 className="text-h5">Создать новый магазин</h1>
          </div>
          <div className="grid gap-2">
            <label className="text-S font-medium" htmlFor="name">
              Заголовок
            </label>
            <Input id="name" {...register('name')} />
            {errors.name && (
              <p className="text-S text-red-500">{errors.name.message}</p>
            )}
            <p className="text-S text-muted-foreground pt-1">
              Используется только внутри Шопкрафтера
            </p>
          </div>

          <div className="flex justify-between pt-4 gap-2">
            <Button
              variant="outline"
              type="button"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Закрыть
            </Button>
            <Button
              type="submit"
              className="bg-[#0A0F1C] text-white hover:bg-[#1A1F2C] flex-1"
            >
              Создать
            </Button>
          </div>
        </form>
      </div>
    </BaseModal>
  );
};
