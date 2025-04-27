'use client';

import { Button } from '@/shared/ui/button';
import { LogoImage } from '@/shared/ui/logo/Logo';
import { useRouter } from 'next/navigation';

export const AuthSwitcher = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-10">
      <LogoImage />

      <div className="w-full max-w-md space-y-4">
        <Button className="w-full" onClick={() => router.push('/register')}>
          {'Зарегистрироваться'}
        </Button>
        <Button
          variant={'outline'}
          className="w-full"
          onClick={() => router.push('/login')}
        >
          {'Уже есть аккаунт, войти'}
        </Button>
      </div>
    </div>
  );
};
