import { z } from 'zod';

export const productFormSchema = z.object({
  name: z.string().min(1, 'Название обязательно'),
  description: z.string().min(1, 'Описание обязательно'),
  price: z.number().min(0, 'Цена должна быть положительной'),
  stock: z.number().min(0, 'Количество должно быть положительным'),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;
