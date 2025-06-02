'use client';

import { useGetStoreByIdEnabled } from '@/features/shop/api/useStores';
import { Footer } from '@/widgets/footer/ui/Footer';
import { CustomHeader } from '@/widgets/header/ui/CustomHeader';
import { useParams } from 'next/navigation';

export type NavItem = {
  value: string;
  label: string;
  path: string;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const params = useParams();
  const storeId = Number(params.store);
  const { data: store } = useGetStoreByIdEnabled(storeId);

  const NAV_ITEMS: NavItem[] = [
    {
      value: 'products',
      label: 'Товары',
      path: `/${params.store}`,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col px-4 lg:px-0">
      <CustomHeader
        logo={''}
        logoWidth={''}
        text={store?.name ?? '...'}
        navItems={NAV_ITEMS}
      />
      <main className="flex-grow pt-21 ">
        <div className="mx-auto w-full  lg:max-w-[1200px] ">{children}</div>
      </main>
      <div className="mx-auto w-full px-4 sm:px-10 lg:px-0 lg:max-w-[1200px] pb-8 pt-12 ">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
