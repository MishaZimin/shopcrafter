'use client';

import { useAppRouter } from '@/shared/lib/navigation';
import { Button } from '@/shared/ui/button';
import { NavMenu } from '@/shared/ui/navbar/ui/NavMenu';
import Image, { StaticImageData } from 'next/image';
import { usePathname } from 'next/navigation';

export type NavItem = {
  value: string;
  label: string;
  path: string;
};

type HeaderProps = {
  logo: string | StaticImageData;
  logoWidth: string;
  text: string;
  navItems: NavItem[];
};

export const CustomHeader = ({ logo, text, navItems }: HeaderProps) => {
  const { router } = useAppRouter();
  const pathname = usePathname();
  const slug = pathname.split('/')[1];

  const handleClick = () => {
    router.push(`/${slug}/cart`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white">
      <div className="mx-auto flex h-[84px] w-full max-w-[1200px] items-center justify-between px-4 lg:px-0">
        <div className="flex items-center gap-6">
          <button
            className="max-w-[148px] max-h-[80px] flex"
            onClick={() => {
              router.push(`/${slug}`);
            }}
          >
            <div className="h-[80px] w-auto max-w-[148px] flex items-center">
              <Image
                src={logo}
                alt="logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </button>
          {text && <p className="font-bold text-xl">{text}</p>}
          <NavMenu tabs={navItems} />
        </div>
        <Button variant="ghost" onClick={handleClick}>
          Корзина
        </Button>
      </div>
    </header>
  );
};
