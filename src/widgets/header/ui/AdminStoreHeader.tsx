'use client';

import { useParams } from 'next/navigation';
import { LogoImage } from '@/shared/ui/logo/Logo';
import { NavMenu } from '@/shared/ui/navbar/ui/NavMenu';

export const AdminStoreHeader = () => {
  const { id } = useParams();

  const NAV_ITEMS = [
    {
      value: 'products',
      label: 'Товары',
      path: `/store-admin/${id}/products`,
    },
    {
      value: 'orders',
      label: 'Заказы',
      path: `/store-admin/${id}/orders`,
    },
    {
      value: 'sales',
      label: 'Продажи',
      path: `/store-admin/${id}/sales`,
    },
    // {
    //   value: 'employees',
    //   label: 'Сотрудники',
    //   path: `/store-admin/${id}/employees`,
    // },
  ];

  return (
    <div className="fixed z-30 w-full bg-white">
      <header className="mx-auto flex h-[80px] w-full items-center justify-between px-4 lg:px-0 lg:max-w-[1200px]">
        <LogoImage />
        <NavMenu tabs={NAV_ITEMS} />
      </header>
    </div>
  );
};
