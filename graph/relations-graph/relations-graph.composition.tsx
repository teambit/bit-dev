import React from 'react';
import { ThemeSwitcher } from '@teambit/design.themes.theme-toggler';
import { RelationsGraph } from './relations-graph';

const scopes = [
  {
    id: 'learnbit.inventions',
    isOpen: true,
  },
  {
    id: 'teambit.design',
  },
];

export const BasicRelationsGraph = () => (
  <ThemeSwitcher style={{ width: '100%', height: '100%' }}>
    <RelationsGraph scopes={scopes} />
  </ThemeSwitcher>
);
