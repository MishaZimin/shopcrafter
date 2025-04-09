'use client';

import { Button } from '@/shared/ui/Buttons/Button';
import { usePricing } from '../model/usePricing';

type PricingCardProps = {
  title: string;
  description: string;
  typeTarif: number;
};

export const PricingCard = ({
  title,
  description,
  typeTarif,
}: PricingCardProps) => {
  const { handleBuyTarifClick } = usePricing({ typeTarif });

  return (
    <div className="w-full flex flex-col bg-base rounded-[16px] p-4 min-h-[256px]">
      <div className="max-w-[200px] flex flex-col gap-2 flex-1">
        <h4 className="text-h4">{title}</h4>
        <p className="text-m ">{description}</p>
      </div>
      <Button text={'Попробовать'} onClick={handleBuyTarifClick} />
    </div>
  );
};
