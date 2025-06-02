import { AudienceCard } from './AudienceCard';
import Handmade from '@/shared/assets/Handmade.svg';
import Startups from '@/shared/assets/Startups.svg';
import Vector from '@/shared/assets/Vector5.svg';

export const AudienceSection = () => {
  return (
    <section id="hero" className=" mb-16">
      <h1 className="text-h2 mb-8">Для кого</h1>
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <AudienceCard
          image={Handmade}
          title={'Мастера handmade'}
          description={'Продавай свои изделия без комиссий'}
        />
        <AudienceCard
          image={Startups}
          title={'Стартапы'}
          description={'Тестируй нишу с минимум вложений'}
        />
        <AudienceCard
          image={Vector}
          title={'Небольшие производства'}
          description={'Масштабируй продажи онлайн'}
        />
      </div>
    </section>
  );
};
