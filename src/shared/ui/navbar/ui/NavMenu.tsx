'use client';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/shared/ui/navigation-menu';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

interface TabConfig {
  value: string;
  label: string;
  path: string;
}

interface NavMenuProps {
  tabs?: TabConfig[];
  className?: string;
  itemClassName?: string;
  activeItemClassName?: string;
}

export const NavMenu = ({
  tabs = [],
  className = '',
  itemClassName = '',
  activeItemClassName = '',
}: NavMenuProps) => {
  const pathname = usePathname();

  if (!tabs.length) return null;

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        {tabs.map((tab) => {
          const isActive =
            pathname === tab.path || pathname.startsWith(`${tab.path}/`);

          return (
            <NavigationMenuItem key={tab.value}>
              <Link href={tab.path} passHref legacyBehavior>
                <NavigationMenuLink
                  data-active={isActive ? 'true' : undefined}
                  className={clsx(itemClassName, {
                    [activeItemClassName ?? '']: isActive,
                  })}
                >
                  {tab.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
