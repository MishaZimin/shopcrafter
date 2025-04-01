import { ReactNode } from 'react';

export interface INavbarItem {
  id: string;
  name: string;
  path: string;
  anchor?: string;
  icon?: ReactNode;
  onClick?: () => void;
  children?: INavbarItem[];
}

export interface INavbarProps {
  items: INavbarItem[];
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  level?: number;
}

export interface INavItemProps {
  item: INavbarItem;
  isActive: boolean;
  onClick?: () => void;
}

export interface INavbarConfig {
  main: INavbarItem[];
  secondary?: INavbarItem[];
}
