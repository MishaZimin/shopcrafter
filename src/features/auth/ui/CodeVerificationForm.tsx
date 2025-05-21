'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { LogoImage } from '@/shared/ui/logo/Logo';

import { codeSchema } from '../model/authShema';
import { useVerifyCode } from '../api/queries/useVerifyCode';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { setToLocalStorage } from '@/shared/lib/local-storage';

type CodeVerificationFormProps = {
  email: string;
  onBack?: () => void;
};

export const CodeVerificationForm = ({ 
  email, 
  onBack 
}: CodeVerificationFormProps) => {
  const router = useRouter();
  const { mutate: verifyCode, isPending } = useVerifyCode();

  const form = useForm<{ code: string }>({
    resolver: zodResolver(codeSchema),
    defaultValues: { code: '' },
  });

const onSubmit = (data: { code: string }) => {
  verifyCode({ email, code: data.code }, {
    onSuccess: (userData) => {
      console.log(userData);
      setToLocalStorage('accessToken', userData.jwtToken);
      setToLocalStorage('refreshToken', userData.refreshToken);

      router.push('/');
    },
  });
};

  return (
    <div className="flex flex-col gap-10">
      <LogoImage />

      <div className="w-full max-w-md space-y-4">
        <h1 className="text-xl font-semibold">Введите код</h1>
        <p className="text-sm text-muted-foreground">
          Мы отправили 6-значный код на {email}
        </p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="code" className="block text-sm font-medium mb-1">
              Код подтверждения
            </label>
            <Input
              id="code"
              placeholder="123456"
              maxLength={6}
              {...form.register('code')}
            />
            {form.formState.errors.code && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.code.message}
              </p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full"
            disabled={isPending}
          >
            {isPending ? 'Проверка...' : 'Войти'}
          </Button>
        </form>

        <div className="flex flex-col gap-2 text-center text-sm">
          <Button 
            variant="link" 
            className="p-0 h-auto" 
            onClick={onBack}
          >
            Отправить код снова
          </Button>
          <Button 
            variant="link" 
            className="p-0 h-auto" 
            onClick={onBack}
          >
            Изменить email
          </Button>
        </div>
      </div>
    </div>
  );
};