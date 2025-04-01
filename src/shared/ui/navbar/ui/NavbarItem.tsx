'use client';

import Link from 'next/link';

type NavItemProps = {
  item: {
    name: string;
    path: string;
    anchor?: string;
    icon?: React.ReactNode;
  };
  isActive?: boolean;
  onClick?: () => void;
};

export const NavItem = ({ item, isActive = false, onClick }: NavItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (!item.anchor) return;
    e.preventDefault();
    const element = document.getElementById(item.anchor);
    if (element) {
      element.style.scrollMarginTop = '96px';
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const className = `flex items-center gap-2 rounded-lg px-3 py-2 ${
    isActive ? 'bg-gray-200' : 'hover:bg-gray-100'
  }`;

  return onClick ? (
    <button onClick={onClick} className={className}>
      {item.icon}
      <span>{item.name}</span>
    </button>
  ) : (
    <Link
      href={item.anchor ? `#${item.anchor}` : item.path}
      onClick={handleClick}
      className={className}
      scroll={!item.anchor}
    >
      {item.icon}
      <span>{item.name}</span>
    </Link>
  );
};
