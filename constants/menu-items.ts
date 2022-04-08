import React from 'react';
import { Dashboard, People, Done } from '@styled-icons/material';
import { ListOl } from 'styled-icons/bootstrap';

const MENU_OPTIONS: MenuOption[] = [
  {
    name: 'Dashboard',
    icon: Dashboard,
    url: '/',
  },
  {
    name: 'Customers',
    icon: People,
    url: '/customers',
  },
  {
    name: 'Global Items',
    icon: ListOl,
    url: '/inventory',
  },
];

export type MenuItem = {
  name: string;
  icon: React.ComponentType;
  url: string;
  id: string;
  depth: number;
  subItems?: MenuItem[];
};

type MenuOption = {
  name: string;
  icon: React.ComponentType;
  url: string;
  subItems?: MenuOption[];
};

function makeMenuLevel(options: MenuOption[], depth = 0): MenuItem[] {
  return options.map((option, idx) => ({
    ...option,
    id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
    depth,
    subItems:
      option.subItems && option.subItems.length > 0
        ? makeMenuLevel(option.subItems, depth + 1)
        : undefined,
  }));
}

export const MENU_ITEMS: MenuItem[] = makeMenuLevel(MENU_OPTIONS);
