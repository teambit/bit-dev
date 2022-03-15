import React from 'react';
import { QuickStartType } from '@teambit/bit.quick-start';
import { WikiQuickStart } from '@teambit/bit.quick-start.wiki-quick-start';
// import { DocsQuickStart } from '@teambit/docs.community.docs-quick-start';
import { DesignQuickStart } from '@teambit/design.community.design-quick-start';
import { BlogQuickStart } from '@teambit/blog.community.blog-quick-start';
import { BasicReact } from '@teambit/community.quick-start.basic-react';

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
    component: <DesignQuickStart />,
  },
  {
    name: 'blog',
    displayName: 'Blog',
    description: 'Scale and collaborate on component-driven content.',
    component: <BlogQuickStart />,
  },
  {
    name: 'basic-backend',
    displayName: 'Basic Backend',
    description: 'Build a basic component-driven and composable backend',
    component: <WikiQuickStart />,
  },
  {
    name: 'basic-react',
    displayName: 'Basic React',
    description: 'Build a basic component-driven React application',
    component: <BasicReact />,
  },
  {
    name: 'basic-cli',
    displayName: 'Basic CLI',
    description: 'Build basic component-driven and composable CLI apps',
    component: <WikiQuickStart />,
  },
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
  //   name: 'analytics',
  //   description: 'Build composable analytics solution',
  //   displayName: 'Analytics',
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
