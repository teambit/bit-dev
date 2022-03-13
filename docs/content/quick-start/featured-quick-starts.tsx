import React from 'react';
import { QuickStartType } from '@teambit/bit.quick-start';
import { WikiQuickStart } from '@teambit/bit.quick-start.wiki-quick-start';

export const quickStarts: QuickStartType[] = [
  {
    name: 'wiki',
    displayName: 'Wiki',
    description: 'Collaborate on organizational process and knowledge with a component-driven wiki.',
    component: <WikiQuickStart />,
  },
  {
    name: 'design',
    displayName: 'Design',
    description: 'Create a scalable and consistent composable design systems',
    component: <WikiQuickStart />,
  },
  {
    name: 'basic-react',
    displayName: 'Basic React',
    description: 'Build a basic component-driven React application',
    component: <WikiQuickStart />,
  },
  {
    name: 'basic-backend',
    displayName: 'Basic Backend',
    description: 'Build a basic component-driven and composable backend',
    component: <WikiQuickStart />,
  },
  {
    name: 'blog',
    displayName: 'Blog',
    description: 'Scale and collaborate on component-driven content.',
    component: <div />,
  },
  {
    name: 'authentication',
    description: 'Create a standard and unified authentication solution',
    displayName: 'Authentication',
    component: <div />,
  },
  {
    name: 'docs',
    displayName: 'Docs',
    description: 'Create component-driven documentation',
    component: <div />,
  },
  {
    name: 'slides',
    description: 'Build reusable and limitless presentation slides',
    displayName: 'Slides',
    component: <div />,
  },
  // {
  //   name: 'docs',
  //   displayName: 'Docs',
  //   component: <div />,
  // },
  // {
  //   name: 'workers',
  //   displayName: 'Newsletter',
  //   component: <div />,
  // },
  // {
  //   name: 'interactive-cli',
  //   displayName: 'Node modules',
  //   component: <div />,
  // },
  // {
  //   name: 'interactive-cli',
  //   displayName: 'Node modules',
  //   component: <div />,
  // },
];
