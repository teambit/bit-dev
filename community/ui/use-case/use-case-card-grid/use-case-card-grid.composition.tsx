import React from 'react';
import { UseCaseCardGrid } from './use-case-card-grid';
import { useCases } from '@teambit/community.entity.use-cases';

export const BasicUseCaseCardGrid = () => (
  <UseCaseCardGrid
    useCases={[
      {
        title: 'Component Library',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper, quam sed.',
        image: 'brands/logo-react.svg',
        href: '/'
      },
      {
        title: 'Micro Frontends',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper, quam sed.',
        image: 'brands/logo-react.svg',
        href: '/'
      },
      {
        title: 'Monorepo Distribution',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper, quam sed.',
        image: 'brands/logo-react.svg',
        href: '/'
      },
      {
        title: 'Server-Side Components',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper, quam sed.',
        image: 'brands/logo-react.svg',
        href: '/'
      }
    ]}
  />
);

export const UseCaseCardGridMockData = () => (
  <UseCaseCardGrid useCases={useCases} />
);
