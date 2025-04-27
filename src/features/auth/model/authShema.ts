import * as z from 'zod';

export const registerSchema = z.object({
  name: z.string().min(1, 'Введите имя'),
  email: z.string().email('Некорректный email').min(1, 'Введите email'),
});

export const loginSchema = z.object({
  email: z.string().email('Некорректный email').min(1, 'Введите email'),
  remember: z.boolean().optional(),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
