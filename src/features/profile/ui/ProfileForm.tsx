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
import { useEffect, useState } from 'react';

const MOCK_VALUES = {
  legalEntity: 'ООО «Моя оборона»',
  inn: '7701234567',
  kpp: '770101001',
  legalAddress: '127018, г. Москва, ул. Сущёвский Вал, д. 5, стр. 1, офис 12',
};

export const ProfileForm = () => {
  const { data, isLoading, isError } = useCurrentUser();
  const updateProfile = useUpdateProfile();
  const [mockValues, setMockValues] = useState(MOCK_VALUES);

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
      setMockValues(MOCK_VALUES);
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

  const handleMockChange = (field: keyof typeof MOCK_VALUES, value: string) => {
    setMockValues((prev) => ({ ...prev, [field]: value }));
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
              <FormLabel>ФИО</FormLabel>
              <FormControl>
                <Input placeholder="Ваше имя" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormItem>
          <FormLabel>Юридическое лицо</FormLabel>
          <FormControl>
            <Input
              value={mockValues.legalEntity}
              onChange={(e) => handleMockChange('legalEntity', e.target.value)}
            />
          </FormControl>
        </FormItem>

        <div className="flex gap-4">
          <FormItem className="flex-1">
            <FormLabel>ИНН</FormLabel>
            <FormControl>
              <Input
                value={mockValues.inn}
                onChange={(e) => handleMockChange('inn', e.target.value)}
              />
            </FormControl>
          </FormItem>
          <FormItem className="flex-1">
            <FormLabel>КПП</FormLabel>
            <FormControl>
              <Input
                value={mockValues.kpp}
                onChange={(e) => handleMockChange('kpp', e.target.value)}
              />
            </FormControl>
          </FormItem>
        </div>

        <FormItem>
          <FormLabel>Юридический адрес</FormLabel>
          <FormControl>
            <Input
              value={mockValues.legalAddress}
              onChange={(e) => handleMockChange('legalAddress', e.target.value)}
            />
          </FormControl>
        </FormItem>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Контакты</FormLabel>
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

        <Button
          type="submit"
          className="w-full mt-4"
          disabled={updateProfile.isPending}
        >
          {updateProfile.isPending ? 'Сохранение...' : 'Сохранить'}
        </Button>
      </form>
    </Form>
  );
};
