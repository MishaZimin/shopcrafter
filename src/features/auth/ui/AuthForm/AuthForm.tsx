'use client';

import { Input } from '@/shared/ui/Inputs/Input';
import { Button } from '@/shared/ui/Buttons/Button';
import { useAuthForm } from '@/features/auth/model/useAuthForm';
import { LogoImage } from '@/shared/ui/logo/Logo';

export const AuthForm = () => {
  const { formData, errors, handleChange, handleJoin } = useAuthForm();

  return (
    <div className="flex flex-col gap-8">
      <LogoImage />
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
          type="primary"
          onClick={handleJoin}
        />
      </div>
    </div>
  );
};
