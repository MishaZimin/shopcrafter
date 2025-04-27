import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormValues, formSchema } from '../types';

export const usePayTariffForm = () => {
  return useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sendReceipt: false,
      email: '',
    },
  });
};
