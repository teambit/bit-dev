import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
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
  <ThemeCompositions style={{ width: '100%', height: '100%' }}>
    <RelationsGraph scopes={scopes} />
  </ThemeCompositions>
);
