import React from 'react';
import { DocsRoute } from '@teambit/docs.entities.docs-routes';
import Welcome from '@teambit/wiki.content.welcome';

export const primaryRoutes: DocsRoute[] = [
  {
    path: '',
    icon: 'lightning',
    title: 'Welcome',
    description: 'Welcome to the first component-driven wiki!',
    component: <Welcome />,
  },
  {
    path: '',
    // path: 'scaling-in-components',
    icon: 'Lightbulb-thinking',
    title: 'Scaling in Components',
    description: 'Bit is a component-driven organization',
  },
];

export const basics: DocsRoute[] = [
  {
    path: '/',
    // path: 'scope',
    title: 'Scope',
  },
  {
    path: '/',
    // path: 'segment',
    title: 'Segment',
  },
  {
    path: '/',
    // path: 'team',
    title: 'Team',
  },
];

export const scopes: DocsRoute[] = [
  {
    path: 'people',
    title: 'People',
    open: false,
    children: [],
  },
  {
    path: 'engineering',
    title: 'Engineering',
    open: false,
    children: [],
  },
  {
    path: 'product',
    title: 'Product',
    open: false,
    children: [],
  },
  {
    path: 'design',
    title: 'Design',
    open: false,
    children: [],
  },
  {
    path: 'sales',
    title: 'Sales',
    open: false,
    children: [],
  },
  {
    path: 'content',
    title: 'Content',
    open: false,
    children: [],
  },
  {
    path: 'marketing',
    title: 'Marketing',
    open: false,
    children: [],
  },
  {
    path: 'customers',
    title: 'Customers',
    open: false,
    children: [],
  },
  {
    path: 'operations',
    title: 'Operations',
    open: false,
    children: [],
  },
];

export const categories = [
  {
    title: 'Basics',
    routes: basics,
  },
  {
    title: 'Scopes',
    routes: scopes,
  },
];
