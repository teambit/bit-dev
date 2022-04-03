import React from 'react';
import { features } from '@teambit/community.entity.features';
import { FeaturesCardGrid } from './features-card-grid';

export const BasicFeaturesCardGrid = () => (
  <FeaturesCardGrid
    features={[
      {
        title: 'Distributed',
        text: 'Component ownership is distributed across developer teams',
        image: 'https://static.bit.cloud/Community/features/distributed.min.svg',
        alt: 'distributed'
      },
      {
        title: 'Maintainable',
        text: 'Components are easy to replace and refactor over time.',
        image: 'https://static.bit.dev/Community/features/maintainable.svg',
        alt: 'maintainable'
      },
      {
        title: 'Visible',
        text: 'Every component is developed in isolation and is its own package.',
        image: 'https://static.bit.dev/Community/features/visibile.svg',
        alt: 'visible'
      },
      {
        title: 'Reusable',
        text: 'Every component is a reusable API which can be used to collaborate with anyone.',
        image: 'https://static.bit.dev/Community/features/reusable.svg',
        alt: 'reusable'
      }
    ]}
  />
);

export const FeaturesCardGridMockData = () => (
  <FeaturesCardGrid features={features} />
);
