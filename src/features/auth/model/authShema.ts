import { z } from 'zod';

export const emailSchema = z.object({
  email: z.string().email('Введите корректный email'),
});

export const codeSchema = z.object({
  code: z.string().min(6, 'Код должен содержать 6 цифр').max(6),
});