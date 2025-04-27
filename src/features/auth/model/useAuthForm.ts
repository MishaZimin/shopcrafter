import { useState } from 'react';
import { useAppRouter } from '@/shared/lib/navigation';
import { useLogin } from '../api/queries/authHooks';

interface FormData {
  mail: string;
}

export const useAuthForm = () => {
  const { router } = useAppRouter();
  const { mutate, isPending } = useLogin();

  const [formData, setFormData] = useState<FormData>({
    mail: '',
  });

  const [errors, setErrors] = useState({
    mail: '',
  });

  const getChangeHandler = (field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { mail: '' };

    if (!formData.mail.trim()) {
      newErrors.mail = 'Введите почту';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleJoin = () => {
    if (validateForm()) {
      mutate(formData.mail, {
        onSuccess: () => {
          router.push('/auth/email-verification');
        },
        onError: () => {
          setErrors({ mail: 'Ошибка при отправке' });
        },
      });
    }
  };

  return {
    formData,
    errors,
    getChangeHandler,
    handleJoin,
    isPending,
  };
};
