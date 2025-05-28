import { z } from 'zod';

export const createShopSchema = z.object({
  name: z.string().min(1, 'Название обязательно'),
  description: z.string().min(1, 'Описание обязательно'),
});

export type CreateShopFormValues = z.infer<typeof createShopSchema>;
