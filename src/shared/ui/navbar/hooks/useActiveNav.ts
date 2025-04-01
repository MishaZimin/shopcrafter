'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { INavbarItem } from '../model/types';

export const useActiveNav = (items: INavbarItem[]) => {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 96;
      const scrollPosition = window.scrollY + headerHeight + 20;

      items.forEach((item) => {
        if (!item.anchor) return;

        const element = document.getElementById(item.anchor);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveId(item.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, items]);

  return activeId;
};
