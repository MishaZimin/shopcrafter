'use client';

import * as React from 'react';
import {
  Layers,
  Image,
  Heading,
  MonitorSmartphone,
  Smartphone,
} from 'lucide-react';
import { LayerSidebarContent } from './LayerSidebarContent';

const layersData = [
  {
    id: 'desktop',
    title: 'Desktop',
    icon: MonitorSmartphone,
    children: [
      {
        id: 'header',
        title: 'Header',
        icon: Heading,
        children: [
          { id: 'header', title: 'Header', icon: Heading },
          { id: 'paragraph', title: 'Paragraph', icon: Heading },
          { id: 'image', title: 'Image', icon: Image },
          { id: 'body', title: 'Body', icon: Layers },
        ],
      },
      { id: 'paragraph', title: 'Paragraph', icon: Heading },
      { id: 'image', title: 'Image', icon: Image },
      { id: 'body', title: 'Body', icon: Layers },
    ],
  },
  {
    id: 'tablet',
    title: 'Tablet',
    icon: MonitorSmartphone,
    children: [],
  },
  {
    id: 'phone',
    title: 'Phone',
    icon: Smartphone,
    children: [],
  },
];

export function LayerSidebar() {
  return (
    <div className="w-[250px]">
      <LayerSidebarContent layers={layersData} />
    </div>
  );
}
