'use client';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { BaseModal } from '@/shared/ui/Modal/Modal';
import { DialogTitle } from '@/shared/ui/dialog';
import { usePayTariffForm } from '../model/hooks/usePayTariffForm';
import { ITariff } from '@/entities/tariff/model/types';
import { TariffInfo } from './TariffInfo';
import { PaymentButtons } from './PaymentButtons';
import { ReceiptForm } from './ReceiptForm';
import { FormValues } from '../model/types';

interface PayTariffModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tariff: ITariff;
}

export const PayTariffModal = ({
  open,
  onOpenChange,
  tariff,
}: PayTariffModalProps) => {
  const { control, handleSubmit, watch, reset } = usePayTariffForm();

  const sendReceipt = watch('sendReceipt');

  const onSubmit = (data: FormValues) => {
    if (data.sendReceipt && !data.email) {
      return;
    }
    console.log('Данные формы:', data);
    onOpenChange(false);
    reset();
  };

  return (
    <BaseModal open={open} onOpenChange={onOpenChange} size="sm">
      <DialogTitle asChild>
        <VisuallyHidden>Купить тариф</VisuallyHidden>
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative flex flex-col gap-6">
          <TariffInfo tariff={tariff} />
          <PaymentButtons />
          <ReceiptForm control={control} sendReceipt={sendReceipt} />
        </div>
      </form>
    </BaseModal>
  );
};
