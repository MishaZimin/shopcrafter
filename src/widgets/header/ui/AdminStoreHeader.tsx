'use client';

import { useParams } from 'next/navigation';
// import { LogoImage } from '@/shared/ui/logo/Logo';
import { NavMenu } from '@/shared/ui/navbar/ui/NavMenu';
import { useGetStoreByIdEnabled } from '@/features/shop/api/useStores';

export const AdminStoreHeader = () => {
  const params = useParams();
  const storeId = Number(params.id);
  const { data: store } = useGetStoreByIdEnabled(storeId);

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
        {/* <LogoImage /> */}
        {store?.name && (
          <p className="font-bold text-xl">{store.name} [Admin]</p>
        )}
        <NavMenu tabs={NAV_ITEMS} />
      </header>
    </div>
  );
};
