import { z } from 'zod';

export interface ITariff {
  id: string;
  name: string;
  price: string;
  description: string;
}

export const formSchema = z.object({
  sendReceipt: z.boolean(),
  email: z.string().email('Некорректный email').optional(),
});

export type FormValues = z.infer<typeof formSchema>;
