import { ITariff } from '@/entities/tariff/model/types';
import { TariffCard } from '@/entities/tariff/ui/TariffCard';
import { PayButton } from '@/features/tariff/pay/ui/PayButton';

interface TariffCardLinkProps {
  tariff: ITariff;
}

export default function TariffCardLink({ tariff }: TariffCardLinkProps) {
  return (
    <TariffCard
      key={tariff.id}
      tariff={tariff}
      actionSlot={
        tariff.name !== 'Бесплатно' ? <PayButton tariff={tariff} /> : null
      }
    />
  );
}
