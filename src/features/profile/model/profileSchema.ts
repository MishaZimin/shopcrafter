import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string().min(1, 'Имя обязательно'),
  email: z.string().email(),
  phone: z.string().optional(),
});

export type ProfileFormData = z.infer<typeof profileSchema>;