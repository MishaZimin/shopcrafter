'use client';

import { useAppRouter } from '@/shared/lib/navigation';
import { Button } from '@/shared/ui/button';
import { LogoImage } from '@/shared/ui/logo/Logo';
import { NavMenu } from '@/shared/ui/navbar/ui/NavMenu';

const navItems = [
  { value: 'shops', label: 'Магазины', path: '/my-shops' },
  { value: 'tariffs', label: 'Тарифы', path: '/tariffs' },
  { value: 'news', label: 'Новости', path: '/news' },
  // { value: 'products', label: 'Товары', path: '/products' },
  // { value: 'auth', label: 'auth', path: '/auth-select' },
];

export const Header = () => {
  const { router } = useAppRouter();

  const handleClick = () => {
    router.push('/profile');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white">
      <div className="mx-auto flex h-[84px] w-full max-w-[1200px] items-center justify-between px-4 lg:px-0">
        <div className="flex items-center gap-6">
          <button
            className="max-w-[148px]"
            onClick={() => {
              router.push('/');
            }}
          >
            <LogoImage />
          </button>
          <NavMenu tabs={navItems} />
        </div>
        <Button variant="ghost" onClick={handleClick}>
          Иван Петров
        </Button>
      </div>
    </header>
  );
};
