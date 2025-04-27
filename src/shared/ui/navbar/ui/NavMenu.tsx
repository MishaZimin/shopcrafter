'use client';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/shared/ui/navigation-menu';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
      <NavigationMenuList className="flex flex-row">
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;
          return (
            <NavigationMenuItem key={tab.value}>
              <Link href={tab.path} legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${itemClassName} ${
                    isActive ? activeItemClassName : ''
                  }`}
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
