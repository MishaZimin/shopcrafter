'use client';

import { ITariff } from '@/entities/tariff/model/types';

interface TariffInfoProps {
  tariff: ITariff;
}

export const TariffInfo = ({ tariff }: TariffInfoProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-h5">{tariff.name}</h2>
      <p className="">{tariff.description}</p>
      <p className="font-bold text-M">{tariff.price}</p>
    </div>
  );
};
