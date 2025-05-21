'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  profileSchema,
  ProfileFormData,
} from '@/features/profile/model/profileSchema';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { useCurrentUser } from '../api/useCurrentUser';
import { useUpdateProfile } from '../api/useUpdateProfile';
import { useEffect } from 'react';

export const ProfileForm = () => {
  const { data, isLoading, isError } = useCurrentUser();
  const updateProfile = useUpdateProfile();

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  useEffect(() => {
    if (data) {
      form.reset({
        name: data.name ?? '',
        email: data.email ?? '',
        phone: data.phone ?? '',
      });
    }
  }, [data, form]);

  const onSubmit = (formData: ProfileFormData) => {
    if (!data) return;

    updateProfile.mutate({
      id: data.id,
      email: data.email,
      role: data.role,
      name: formData.name,
      phone: formData.phone ?? '',
    });
  };

  if (isLoading) return <p>Загрузка профиля...</p>;
  if (isError || !data) return <p>Ошибка загрузки профиля</p>;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя</FormLabel>
              <FormControl>
                <Input placeholder="Ваше имя" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Телефон</FormLabel>
              <FormControl>
                <Input placeholder="+7 900 000 00 00" {...field} />
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
                <Input disabled {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={updateProfile.isPending}>
          {updateProfile.isPending ? 'Сохранение...' : 'Сохранить'}
        </Button>
      </form>
    </Form>
  );
};