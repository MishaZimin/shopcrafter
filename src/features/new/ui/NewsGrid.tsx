'use client';

import { INew } from '@/entities/new/model/types';
import { NewsCardLink } from '@/features/new/ui/NewsCardLink';

const news: INew[] = [
  {
    id: '1',
    name: 'Новые функции на платформе',
    description: 'Обновления, которые делают ваш магазин ещё мощнее',
  },
  {
    id: '2',
    name: 'Истории успеха наших пользователей',
    description:
      'Как мастера своего дела выходят в онлайн и увеличивают продажи',
  },
  {
    id: '3',
    name: 'Новые функции на платформе',
    description: 'Обновления, которые делают ваш магазин ещё мощнее',
  },
  {
    id: '4',
    name: 'Истории успеха наших пользователей',
    description:
      'Как мастера своего дела выходят в онлайн и увеличивают продажи',
  },
  {
    id: '5',
    name: 'Новые функции на платформе',
    description: 'Обновления, которые делают ваш магазин ещё мощнее',
  },
];

export default function NewsGrid() {
  return (
    <div className="container">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map((newItem) => (
          <NewsCardLink key={newItem.id} newItem={newItem} />
        ))}
      </div>
    </div>
  );
}
