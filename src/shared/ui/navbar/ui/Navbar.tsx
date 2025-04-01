'use client';

import { useActiveNav } from '../hooks/useActiveNav';
import { INavbarProps } from '../model/types';
import { NavItem } from './NavbarItem';

export const Navbar = ({
  items,
  orientation = 'horizontal',
  className = '',
  level = 0,
}: INavbarProps) => {
  const activeId = useActiveNav(items);

  return (
    <nav
      className={`flex gap-1 ${
        orientation === 'vertical' ? 'flex-col' : 'flex-row'
      } ${className}`}
      aria-label={level > 0 ? 'Sub navigation' : 'Main navigation'}
    >
      {items.map((item) => (
        <div key={item.id} className="relative">
          <NavItem item={item} isActive={activeId === item.id} />
          {item.children && (
            <div className="absolute left-0 top-full mt-1 hidden group-hover:block">
              <Navbar
                items={item.children}
                orientation="vertical"
                level={level + 1}
                className="w-48 rounded-md bg-white p-2 shadow-lg"
              />
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};
