import React from 'react';
import { useLocation } from '@teambit/base-react.navigation.link';
import { TabLink } from './tab-link';

export const BasicTabLink = () => <TabLink>basic link</TabLink>;

export const ActiveTabLink = () => {
  const location = useLocation();

  return (
    <div style={{ height: '44px', pointerEvents: 'none' }}>
      <TabLink href={location?.pathname} active data-testid="active-link">
        active link
      </TabLink>
    </div>
  );
};

export const TopActiveTabLink = () => {
  const location = useLocation();

  return (
    <div style={{ height: '44px', pointerEvents: 'none' }}>
      <TabLink href={location?.pathname} borderPosition="top" data-testid="top-link">
        top active link
      </TabLink>
    </div>
  );
};

export const LeftActiveTabLink = () => {
  const location = useLocation();

  return (
    <div style={{ height: '44px', pointerEvents: 'none' }}>
      <TabLink href={location?.pathname} active borderPosition="left" data-testid="left-link">
        left active link
      </TabLink>
    </div>
  );
};

export const RightActiveTabLink = () => {
  const location = useLocation();

  return (
    <div style={{ height: '44px', pointerEvents: 'none' }}>
      <TabLink href={location?.pathname} active borderPosition="right" data-testid="right-link">
        right active link
      </TabLink>
    </div>
  );
};
