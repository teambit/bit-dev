import React from 'react';
import { lazy } from '@loadable/component';
import { QuickStartType } from '@teambit/bit.quick-start';
import { BasicReact } from '@teambit/community.quick-start.basic-react';

const WikiQuickStart = lazy(
  () => import('@teambit/bit.quick-start.wiki-quick-start')
);
// const BlogQuickStart = lazy(() => import('@teambit/blog.community.blog-quick-start'));
// const BackendQuickStart = lazy(() => import('@teambit/community.quick-start.basic-backend'));
const AnalyticsQuickStart = lazy(
  () => import('@teambit/analytics.community.analytics-quick-start')
);
const DesignQuickStart = lazy(
  () => import('@teambit/design.community.design-quick-start')
);
const DataFetchingQuickStart = lazy(
  () => import('@teambit/community.quick-start.data-fetching')
);

export const quickStarts: QuickStartType[] = [
  {
    name: 'wiki',
    displayName: 'Wiki',
    description:
      'Learn how to use component-driven wiki to power knowledge sharing.',
    component: <WikiQuickStart />,
  },
  {
    name: 'design',
    displayName: 'Design',
    description: 'Create a scalable and consistent composable design system',
    component: <DesignQuickStart />,
  },
  // {
  //   name: 'blog',
  //   displayName: 'Blog',
  //   description: 'Scale and collaborate on component-driven content.',
  //   component: <BlogQuickStart />,
  // },
  // {
  //   name: 'basic-backend',
  //   displayName: 'Basic Backend',
  //   description: 'Build a basic component-driven and composable backend',
  //   component: <BackendQuickStart />,
  // },
  {
    name: 'analytics',
    description: 'Build a composable and cross application analytics',
    displayName: 'Analytics',
    component: <AnalyticsQuickStart />,
  },
  {
    name: 'data-fetching',
    displayName: 'Data Fetching',
    description: 'Build a component-driven data fetching',
    component: <DataFetchingQuickStart />,
  },
  {
    name: 'basic-react',
    displayName: 'Basic React',
    description: 'Build a basic component-driven React application',
    component: <BasicReact />,
  },
  // {
  //   name: 'basic-cli',
  //   displayName: 'Basic CLI',
  //   description: 'Build basic component-driven and composable CLI apps',
  //   component: <WikiQuickStart />,
  // },
  // {
  //   name: 'authentication',
  //   description: 'Create a standard and unified authentication solution',
  //   displayName: 'Authentication',
  //   component: <div />,
  // },
  // {
  //   name: 'docs',
  //   displayName: 'Docs',
  //   description: 'Create component-driven documentation',
  //   component: <DocsQuickStart />,
  // },
  // {
  //   name: 'quick-start',
  //   displayName: 'Quick start',
  //   description: 'Learn how to contribute your own composable Quick start!',
  //   // dogfooding paradox - have to export before creating the component.
  //   component: <QuickStartQuickStart />,
  // },
  // {
  //   name: 'slides',
  //   description: 'Build reusable and limitless presentation slides',
  //   displayName: 'Slides',
  //   component: <div />,
  // },
  // {
  //   name: 'basic-angular',
  //   displayName: 'Basic Angular',
  //   component: <div />,
  // },
  // {
  //   name: 'docs',
  //   displayName: 'Docs',
  //   component: <div />,
  // },
  // {
  //   name: 'newsletter',
  //   displayName: 'Newsletter',
  //   component: <div />,
  // },
];
