import { WorkflowCard } from './WorkflowCard';
import Handmade from '@/shared/assets/Handmade.svg';
import Startups from '@/shared/assets/Startups.svg';
import Vector from '@/shared/assets/Vector5.svg';

export const WorkflowSection = () => {
  return (
    <section id="features" className=" mb-16">
      <h1 className="text-h2 mb-8">Как работает</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <WorkflowCard
          image={Handmade}
          title={'1. Выбираешь дизайн'}
          description={'Из 50+ готовых шаблонов'}
        />
        <WorkflowCard
          image={Startups}
          title={'2. Добавляешь товары'}
          description={'Загружай фото и описание'}
        />
        <WorkflowCard
          image={Vector}
          title={'3. Подключаешь оплату'}
          description={'Stripe, СБП, Qiwi и другие'}
        />
        <WorkflowCard
          image={Handmade}
          title={'4. Запускаешь магазин'}
          description={'Получаешь ссылку и начинаешьпродавать'}
        />
      </div>
    </section>
  );
};
