'use client';

import { Control } from 'react-hook-form';
import { Switch } from '@/shared/ui/switch';
import { Input } from '@/shared/ui/input';
import { Controller } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { FormValues } from '../model/types';

interface ReceiptFormProps {
  control: Control<FormValues>;
  sendReceipt: boolean;
}

export const ReceiptForm = ({ control, sendReceipt }: ReceiptFormProps) => {
  return (
    <div className="flex flex-col gap-4 pt-2">
      <div className="flex items-center gap-2">
        <Controller
          name="sendReceipt"
          control={control}
          render={({ field }) => (
            <Switch
              id="sendReceipt"
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          )}
        />
        <label htmlFor="sendReceipt" className="text-sm font-medium">
          Отправить квитанцию на почту
        </label>
      </div>
      <AnimatePresence>
        {sendReceipt && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Почта
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Введите ваш email"
                      {...field}
                    />
                    {fieldState.error && (
                      <p className="text-xs text-red-500">
                        {fieldState.error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
