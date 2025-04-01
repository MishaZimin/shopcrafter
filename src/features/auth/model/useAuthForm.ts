import { useState } from 'react';
import { useAppRouter } from '@/shared/lib/navigation';

export const useAuthForm = () => {
  const { router } = useAppRouter();

  const [formData, setFormData] = useState({
    mail: '',
  });
  const [errors, setErrors] = useState({
    mail: '',
  });

  const handleChange = (field: keyof typeof formData) => (value: string) => {
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
      console.log('Форма валидна, данные:', formData);
      router.push('/auth/email-verification');
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleJoin,
  };
};
