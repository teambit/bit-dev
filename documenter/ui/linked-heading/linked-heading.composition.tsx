import React from 'react';
import { LinkedHeading } from './linked-heading';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

export const Large = () => {
  return (
    <ThemeCompositions>
      <LinkedHeading size="xl" link="link" id="link">
        large
      </LinkedHeading>
    </ThemeCompositions>
  );
};
export const Default = () => {
  return (
    <ThemeCompositions>
      <LinkedHeading link="link">default</LinkedHeading>
    </ThemeCompositions>
  );
};
export const Small = () => {
  return (
    <ThemeCompositions>
      <LinkedHeading size="xs" link="link">
        small
      </LinkedHeading>
    </ThemeCompositions>
  );
};
