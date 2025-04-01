'use client';

import { Input } from '@/shared/ui/Inputs/Input';
import { Button } from '@/shared/ui/Buttons/Button';
import Logo from '@/shared/assets/Logo.svg';
import Image from 'next/image';
import { useAuthForm } from '@/features/auth/model/useAuthForm';

export const AuthForm = () => {
  const { formData, errors, handleChange, handleJoin } = useAuthForm();

  return (
    <div className="flex flex-col gap-8">
      <Image src={Logo} className="w-[160px]" alt="udv logo" priority />
      <div className="flex flex-col gap-3">
        <Input
          label="Почта"
          onChange={handleChange('mail')}
          value={formData.mail}
          variant={errors.mail ? 'error' : 'default'}
          errorText={errors.mail}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Button
          text="Продолжить"
          textColor="light"
          buttonType="primary"
          onClick={handleJoin}
        />
      </div>
    </div>
  );
};
