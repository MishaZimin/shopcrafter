import { ITariff } from '@/entities/tariff/model/types';
import TariffCardLink from './TariffCardLink';

const tariffs: ITariff[] = [
  {
    id: '1',
    name: 'Бесплатно',
    description: '14 дней теста',
    price: 'Бесплатно',
  },
  {
    id: '2',
    name: 'Стандарт',
    description: 'Полный функционал',
    price: '990 ₽/мес',
  },
  {
    id: '3',
    name: 'PRO',
    description: 'SEO + маркетинг-инструменты',
    price: '2 990 ₽/мес',
  },
];

export default function TariffGrid() {
  return (
    <div className="container">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tariffs.map((tariff) => (
          <TariffCardLink key={tariff.id} tariff={tariff} />
        ))}
      </div>
    </div>
  );
}
