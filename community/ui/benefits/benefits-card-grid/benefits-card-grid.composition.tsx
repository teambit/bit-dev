import React from 'react';
import { BenefitsCardGrid } from './benefits-card-grid';
import { benefits } from '@teambit/community.entity.benefits';

export const BasicBenefitsCardGrid = () => (
  <BenefitsCardGrid
    benefits={[
      {
        title: 'Distributed',
        text: 'Component ownership is distributed across developer teams',
        image: 'brands/logo-react.svg',
        alt: 'react logo'
      },
      {
        title: 'Maintainable',
        text: 'Components are easy to replace and refactor over time.',
        image: 'brands/logo-angular.svg',
        alt: 'angular logo'
      },
      {
        title: 'Visibile',
        text: 'Every component is developed in isolation and is its own package.',
        image: 'brands/logo-vue.svg',
        alt: 'vue logo'
      },
      {
        title: 'Reusable',
        text: 'Every component is a reusable API which can be used to collaborate with anyone.',
        image: 'brands/logo-web-components.svg',
        alt: 'web components logo'
      }
    ]}
  />
);

export const UseCaseCardGridMockData = () => (
  <BenefitsCardGrid benefits={benefits} />
);
