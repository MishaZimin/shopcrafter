import { PricingCard } from './PricingCard';

export const PricingSection = () => {
  return (
    <section id="price" className=" mb-16">
      <h1 className="text-h2 mb-8">Тарифы</h1>
      <div className="flex flex-row gap-4 ">
        <PricingCard
          title={'Бесплатно'}
          description={'14 дней теста'}
          typeTarif={1}
        />
        <PricingCard
          title={'Бесплатно'}
          description={'14 дней теста'}
          typeTarif={2}
        />
        <PricingCard
          title={'Бесплатно'}
          description={'14 дней теста'}
          typeTarif={3}
        />
      </div>
    </section>
  );
};
