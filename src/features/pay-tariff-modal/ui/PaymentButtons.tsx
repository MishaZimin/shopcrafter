'use client';

import { Button } from '@/shared/ui/button';

export const PaymentButtons = () => {
  return (
    <div className="flex flex-col gap-4">
      <Button type="submit">Банковской картой</Button>
      <Button variant="outline" type="submit">
        Тинькофф
      </Button>
      <Button variant="outline" type="submit">
        СПБ
      </Button>
    </div>
  );
};
