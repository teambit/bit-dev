import React from 'react';
import { useLocation } from '@teambit/base-react.navigation.use-location';
import { TabLink } from './tab-link';

export const BasicTabLink = () => <TabLink>basic link</TabLink>;

export const ActiveTabLink = () => {
  const location = useLocation();

  return (
    <div style={{ height: '44px', pointerEvents: 'none' }}>
      <TabLink href={location?.pathname} active>
        active link
      </TabLink>
    </div>
  );
};
