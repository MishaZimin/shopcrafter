'use client';

import { Button } from '@/shared/ui/Buttons/Button';
import { useHero } from '../model/useHero';

export const HeroSection = () => {
  const { handleCreateShopClick } = useHero();

  return (
    <section className="mt-16 mb-16">
      <h1 className="text-h2 pb-6">
        Шопкрафтер — это сервис
        <br /> для создания интернет-магазинов
      </h1>
      <p className="text-M mb-18">
        Создайте свой интернет-магазин без единой строки кода <br /> и начни
        зарабатывать деньги
      </p>
      <Button
        text={'Создать интернет-магазин'}
        size={'xxl'}
        onClick={handleCreateShopClick}
      />
    </section>
  );
};
