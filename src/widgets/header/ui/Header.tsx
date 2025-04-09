'use client';

import { useAppRouter } from '@/shared/lib/navigation';
import { Button } from '@/shared/ui/Buttons/Button';
import { LogoImage } from '@/shared/ui/logo/Logo';
import { Navbar } from '@/shared/ui/navbar/ui/Navbar';

const NAV_ITEMS = [
  {
    id: 'home',
    name: 'Для кого',
    path: '/info',
    anchor: 'hero',
  },
  {
    id: 'features',
    name: 'Для чего',
    path: '/info',
    anchor: 'features',
  },
  // {
  //   id: 'questions',
  //   name: 'Частые вопросы',
  //   path: '/info',
  //   anchor: 'questions',
  // },
  {
    id: 'price',
    name: 'Цены',
    path: '/info',
    anchor: 'price',
  },
];

export const Header = () => {
  const { router } = useAppRouter();

  const handleClick = () => {
    router.push('/auth');
  };

  return (
    <>
      <div className="fixed z-30 mr-[50px] w-full bg-white">
        <header className="py-auto z-20 mx-auto flex h-[96px] w-full items-center justify-between align-middle lg:w-[800px]">
          <div className="max-w-[148px]">
            <LogoImage />
          </div>

          <div className="">
            <Navbar items={NAV_ITEMS} orientation="horizontal" />
          </div>
          <div className="">
            <Button text={'Попробовать'} onClick={handleClick} />
          </div>
        </header>
      </div>
    </>
  );
};
