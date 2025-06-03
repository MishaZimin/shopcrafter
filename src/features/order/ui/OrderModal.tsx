/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseModal } from '@/shared/ui/Modal/Modal';
import { DialogTitle } from '@/shared/ui/dialog';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { orderSchema, OrderFormValues } from '../model/orderSchema';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group';
import { useCreateOrder } from '../api/useCreateOrder';
import { OrderRequest } from '../api/orderApi';
import { useUserStoreCategory } from '@/features/product/model/useUserStoreCategory';

interface OrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const OrderModal = ({ open, onOpenChange }: OrderModalProps) => {
  const { storeId } = useUserStoreCategory();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      messengerLink: '',
      deliveryType: 'PICKUP',
      city: '',
      address: '',
      paymentType: 'CASH',
      comment: '',
    },
  });

  const createOrderMutation = useCreateOrder();

  const onSubmit = async (formData: OrderFormValues) => {
    const cartItems = JSON.parse(
      localStorage.getItem(`cart-${storeId}`) || '[]'
    );

    const payload: OrderRequest = {
      products: cartItems.map((item: any) => ({
        productId: Number(item.id),
        quantity: item.quantity,
        productName: item.name,
      })),
      customerInfo: formData,
    };

    try {
      const result = await createOrderMutation.mutateAsync(payload);
      localStorage.removeItem(`cart-${storeId}`);
      onOpenChange(false);
      console.log('Заказ создан:', result);
    } catch (error) {
      console.error('Ошибка создания заказа:', error);
    }
  };

  return (
    <BaseModal open={open} onOpenChange={onOpenChange} size="md">
      <DialogTitle asChild>
        <VisuallyHidden>Оформление заказа</VisuallyHidden>
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <h1 className="text-h5">Оформить заказ</h1>

        <div className="grid gap-2">
          <Input {...register('name')} placeholder="Имя" />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}

          <Input {...register('phone')} placeholder="Телефон" />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}

          <Input {...register('email')} placeholder="Email" />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}

          <Input
            {...register('messengerLink')}
            placeholder="Telegram / WhatsApp"
          />
          {errors.messengerLink && (
            <p className="text-sm text-red-500">
              {errors.messengerLink.message}
            </p>
          )}

          <Input {...register('city')} placeholder="Город" />
          {errors.city && (
            <p className="text-sm text-red-500">{errors.city.message}</p>
          )}

          <Input {...register('address')} placeholder="Адрес доставки" />
          {errors.address && (
            <p className="text-sm text-red-500">{errors.address.message}</p>
          )}

          <Input {...register('comment')} placeholder="Комментарий к заказу" />
          {errors.comment && (
            <p className="text-sm text-red-500">{errors.comment.message}</p>
          )}
        </div>

        <div className="grid gap-4">
          <div>
            <label className="font-medium block mb-2">Тип доставки</label>
            <Controller
              control={control}
              name="deliveryType"
              render={({ field }) => (
                <RadioGroup value={field.value} onValueChange={field.onChange}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="pickup" value="PICKUP" />
                    <label htmlFor="pickup">Самовывоз</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="delivery" value="DELIVERY" />
                    <label htmlFor="delivery">Доставка</label>
                  </div>
                </RadioGroup>
              )}
            />
            {errors.deliveryType && (
              <p className="text-sm text-red-500">
                {errors.deliveryType.message}
              </p>
            )}
          </div>

          <div>
            <label className="font-medium block mb-2">Тип оплаты</label>
            <Controller
              control={control}
              name="paymentType"
              render={({ field }) => (
                <RadioGroup value={field.value} onValueChange={field.onChange}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="cash" value="CASH" />
                    <label htmlFor="cash">Наличные</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="card" value="ONLINE_CARD" />
                    <label htmlFor="card">Картой</label>
                  </div>
                </RadioGroup>
              )}
            />
            {errors.paymentType && (
              <p className="text-sm text-red-500">
                {errors.paymentType.message}
              </p>
            )}
          </div>
        </div>

        <Button className="w-full" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Отправка...' : 'К оплате'}
        </Button>
      </form>
    </BaseModal>
  );
};
