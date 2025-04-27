'use client';

import { CreateButton } from '@/features/shop/create/ui/CreateButton';
import ShopsGrid from '../../../features/shop/grid/ui/ShopsGrid';

export default function MyShopsSection() {
  return (
    <div className="flex flex-col gap-4 w-full pt-2">
      <div className="flex flex-row w-full justify-between">
        <h2 className="text-2xl font-bold">Мои проекты</h2>
        <CreateButton />
      </div>
      <ShopsGrid />
    </div>
  );
}
