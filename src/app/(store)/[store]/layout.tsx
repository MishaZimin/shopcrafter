'use client';

import { Footer } from '@/widgets/footer/ui/Footer';
import { CustomHeader, NavItem } from '@/widgets/header/ui/CustomHeader';
import { getShopBySlug } from '@/features/shop/api/api';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IShop } from '@/shared/api/mock';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const slug = pathname.split('/')[1];
  const [shop, setShop] = useState<IShop | null>();
  const [loading, setLoading] = useState(true);

  const [navItems, setNavItems] = useState<NavItem[]>([]);

  useEffect(() => {
    const fetchShop = async () => {
      const res = await getShopBySlug(slug);
      setShop(res);
      if (res) {
        setNavItems([
          { value: 'products', label: 'Товары', path: `/${res.slug}` },
          // { value: 'cart', label: 'Корзина', path: `/${res.slug}/cart` },
        ]);
      }
      setLoading(false);
    };

    fetchShop();
  }, [slug]);

  if (loading)
    return <div className="py-20 text-center">Загрузка страницы...</div>;

  if (!shop) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Магазин не найден</h1>
        <p>Такого магазина не существует. Проверьте URL.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <CustomHeader
        logo={shop.logo}
        logoWidth={''}
        text={shop.name}
        navItems={navItems}
      />
      <main className="flex-grow pt-21">
        <div className="mx-auto w-full px-4 sm:px-10 lg:px-0 lg:w-[1200px] ">
          {children}
        </div>
      </main>
      <div className="mx-auto w-full px-4 sm:px-10 lg:px-0 lg:w-[1200px] pb-8 pt-12">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
