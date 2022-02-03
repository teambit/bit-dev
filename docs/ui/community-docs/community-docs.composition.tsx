import React from 'react';
import { NavigationProvider } from '@teambit/base-react.navigation.link';
import { reactRouterAdapter } from '@teambit/ui-foundation.ui.navigation.react-router-adapter';
import { CommunityDocs } from './community-docs';

export const BasicCommunityDocs = () => (
  <NavigationProvider implementation={reactRouterAdapter}>
    <CommunityDocs />
  </NavigationProvider>
);