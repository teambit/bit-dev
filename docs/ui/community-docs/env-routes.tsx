import React from 'react';
import { lazy } from '@loadable/component';
import { DocsRoute } from '@teambit/docs.entities.docs-routes';

/* Harmony */
//const AspectsOverview = lazy(() => import('@teambit/harmony.content.aspects-overview'));
/* React */
const ReactOverview = lazy(() => import('@teambit/react.content.react-overview'));
const ReplacingReactTools = lazy(() => import('@teambit/react.content.replace-react-tools'));
const ConfigReactTools = lazy(() => import('@teambit/react.content.config-react-tools'));

/* ReactNative */
const ReactNativeOverview = lazy(() => import('@teambit/react.content.react-native-overview'));

/* node */
const NodeOverview = lazy(() => import('@teambit/harmony.content.node-overview'));

/* lit html */
const LitOverview = lazy(() => import('@teambit/web-components.content.lit-overview'));

/* html */
const HtmlOverview = lazy(() => import('@teambit/html.content.html-overview'));

/* Angular */
const AngularOverview = lazy(() => import('@teambit/angular.content.angular-overview'));

export const envRoutes: DocsRoute[] = [
  {
    path: 'react',
    title: 'React',
    icon: 'reactjs',
    open: false,
    children: [
      {
        path: 'react-overview',
        title: 'React overview',
        component: <ReactOverview />,
      },
      {
        path: 'config-react-tools',
        title: 'Configuring React tools',
        component: <ConfigReactTools />,
      },
      {
        path: 'replace-react-tools',
        title: 'Replacing React tools',
        component: <ReplacingReactTools />,
      },
      {
        path: 'react-native-overview',
        title: 'React Native',
        component: <ReactNativeOverview />,
      },
    ],
  },
  {
    path: 'angular',
    title: 'Angular',
    icon: 'Angular',
    open: false,
    children: [
      {
        path: 'angular-overview',
        title: 'Angular overview',
        component: <AngularOverview />,
      },
    ],
  },
  {
    path: 'node',
    title: 'Node',
    icon: 'nodejs',
    open: false,
    children: [
      {
        path: 'node-overview',
        title: 'Node overview',
        component: <NodeOverview />,
      },
    ],
  },
  {
    path: 'html',
    title: 'HTML',
    icon: 'html',
    open: false,
    children: [
      {
        path: 'html-overview',
        title: 'HTML overview',
        component: <HtmlOverview />,
      },
      {
        path: 'configure-webpack',
        title: 'Configure webpack',
        component: <div />,
        // component: <ConfigureWebpack />,
      },
    ],
  },
  {
    path: 'lit-html',
    title: 'Lit',
    icon: 'lit-element',
    open: false,
    children: [
      {
        path: 'lit-overview',
        title: 'Lit overview',
        component: <LitOverview />,
      },
    ],
  },
  {
    path: 'harmony',
    title: 'Bit Aspect',
    icon: 'Extension',
    open: false,
    children: [],
  },
  /*{
     path: 'harmony',
     title: 'Harmony',
     icon: 'Extension',
     open: false,
     children: [],
   },**/
  {
    path: 'harmony',
    title: 'Compose your own..',
    icon: 'Extension',
    open: false,
    children: [],
  },
];
