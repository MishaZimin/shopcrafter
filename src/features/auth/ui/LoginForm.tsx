'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { LogoImage } from '@/shared/ui/logo/Logo';

import { CodeVerificationForm } from './CodeVerificationForm';
import { emailSchema } from '../model/authShema';
import { useSendVerificationCode } from '../api/queries/useSendVerificationCode';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';

export const LoginForm = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState('');
  const { mutate: sendCode, isPending, error } = useSendVerificationCode();

  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = (data: { email: string }) => {
    setEmail(data.email);
    sendCode(data.email, {
      onSuccess: () => setEmailSent(true),
    });
  };

  if (emailSent) {
    return <CodeVerificationForm email={email} onBack={() => setEmailSent(false)} />;
  }

  return (
    <div className="flex flex-col gap-10">
      <LogoImage />

      <div className="w-full max-w-md space-y-4">
        <h1 className="text-xl font-semibold">Вход</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Почта
            </label>
            <Input
              id="email"
              placeholder="mail@gmail.com"
              type="email"
              {...register('email')}
            />
            {formState.errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {formState.errors.email.message}
              </p>
            )}
          </div>

          {error && (
            <p className="text-red-500 text-sm">
              {error.message || 'Ошибка при отправке кода'}
            </p>
          )}

          <Button 
            type="submit" 
            className="w-full mt-7"
            disabled={isPending}
          >
            {isPending ? 'Отправка...' : 'Получить код'}
          </Button>
        </form>
      </div>
    </div>
  );
};