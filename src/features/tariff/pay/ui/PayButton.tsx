'use client';

import { ITariff } from '@/entities/tariff/model/types';
import { PayTariffModal } from '@/features/pay-tariff-modal/ui/PayTariffModal';
import { Button } from '@/shared/ui/button';
import { useState } from 'react';

interface PayButtonProps {
  tariff: ITariff;
}

export const PayButton = ({ tariff }: PayButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Оплатить</Button>
      <PayTariffModal open={open} onOpenChange={setOpen} tariff={tariff} />
    </>
  );
};
