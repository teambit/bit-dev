import React from 'react';
import { DocsRoute } from '@teambit/docs.ui.docs';
import loadable from '@loadable/component';
import DecoupledCodebases from '@teambit/docs.content.mfe.decoupled-codebases';

export const docsRoutes: DocsRoute[] = [
  {
    path: 'micro-frontends',
    title: 'Micro Frontends',
    children: [
      {
        title: 'Overview',
        path: 'overview'
      },
      {
        title: 'Decoupled codebases',
        path: 'decoupled-codebases',
        component: <DecoupledCodebases />
      },
      {
        title: 'Autonomy and Independence',
        path: 'autonomy-and-independence'
      },
      {
        title: 'Standardization',
        path: 'standardization'
      },
      {
        title: 'Discoverability',
        path: 'discoverability'
      },
      {
        title: 'Consumption strategies',
        path: 'consumption-strategies'
      },
      {
        title: 'Features and apps',
        path: 'features-and-apps'
      },
      {
        title: 'Integration slots',
        path: 'integration-slots'
      },
      {
        title: 'Component sharing',
        path: 'component-sharing'
      },
      {
        title: 'Updates',
        path: 'updates'
      },
      {
        title: 'Multi framework',
        path: 'multi-framework'
      }
    ]
  },
  {
    path: 'component-libraries',
    title: 'Component Libraries',
    children: [
      {
        title: 'Overview',
        path: 'overview'
      },
      {
        title: 'Architecture',
        path: 'architecture'
      },
      {
        title: 'Development',
        path: 'component-development'
      },
      {
        title: 'Dependencies',
        path: 'dependencies'
      },
      {
        title: 'Testing',
        path: 'component-testing'
      },
      {
        title: 'Documenting',
        path: 'documenting'
      },
      {
        title: 'Building',
        path: 'component-testing'
      },
      {
        title: 'Distribution',
        path: 'distributing'
      },
      {
        title: 'Reviewing',
        path: 'reviewing'
      },
      {
        title: 'Adopting',
        path: 'adopting'
      }
    ]
  },
  {
    title: 'Server side development',
    path: 'server-side-development',
    children: [
      {
        title: 'Micro services',
        path: 'micro-services'
      },
      {
        title: 'BFF (backend for frontends)',
        path: 'bff'
      },
      {
        title: 'Shared types',
        path: 'shared-types'
      },
      {
        title: 'Data fetching',
        path: 'data-fetching'
      }
    ]
  }
];
