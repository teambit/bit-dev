import React from 'react';
import { mockComponentCards } from '@teambit/community.entity.component-cards';
import { ComponentCardGrid } from './component-card-grid';

export const BasicComponentCardGrid = () => (
  <ComponentCardGrid componentCards={mockComponentCards} />
);
