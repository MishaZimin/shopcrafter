'use client';

import { Button } from '@/shared/ui/button';
import Link from 'next/link';

export const TariffPayCard = () => {
  return (
    <div className="rounded-lg p-4 space-y-2 bg-base1">
      <h3 className="font-medium">
        Активный тариф: <span className="font-bold">Бесплатно</span>
      </h3>
      <p className="text-sm">
        Осталось <span className="font-medium">14 дней</span>
      </p>

      <Button asChild variant="outline" className="h-auto">
        <Link href="/tariffs" className="text-primary">
          Тарифы и оплата
        </Link>
      </Button>
    </div>
  );
};
