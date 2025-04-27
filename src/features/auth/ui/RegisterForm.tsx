'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/shared/ui/button';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { RegisterFormData, registerSchema } from '../model/authShema';
import { Input } from '@/shared/ui/input';
import { LogoImage } from '@/shared/ui/logo/Logo';

export const RegisterForm = () => {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log('Register data:', data);
  };

  return (
    <div className="flex flex-col gap-10">
      <LogoImage />

      <div className="w-full max-w-md space-y-4">
        <h1 className="text-xl font-semibold">Регистрация</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input placeholder="Иван" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Почта</FormLabel>
                  <FormControl>
                    <Input placeholder="mail@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full mt-7">
              Получить код
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
