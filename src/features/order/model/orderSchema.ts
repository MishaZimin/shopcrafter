import { z } from 'zod';

export const orderSchema = z.object({
  name: z.string().min(1, 'Имя обязательно'),
  phone: z.string().min(6, 'Телефон обязателен'),
  email: z.string().email('Некорректный email'),
  messengerLink: z.string().min(1, 'Некорректная ссылка'),
  deliveryType: z.enum(['PICKUP', 'DELIVERY']),
  city: z.string().min(1, 'Город обязателен'),
  address: z.string().min(1, 'Адрес обязателен'),
  paymentType: z.enum(['CASH', 'ONLINE_CARD']),
  comment: z.string().optional(),
});

export type OrderFormValues = z.infer<typeof orderSchema>;
