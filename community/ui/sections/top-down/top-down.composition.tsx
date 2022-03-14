import React from 'react';
import { TopDown } from './top-down';
import { IconButton } from '@teambit/design.ui.icon-button';

export const BasicTopDown = () => (
  <TopDown
    title="Create. Compose. Collaborate"
    subtitle="Create new components quickly and compose them with others, based on pre-made community templates, or build templates of your own to accelerate your component development workflow."
  >
    <IconButton priority="cta" size="l">
      Learn more
    </IconButton>
  </TopDown>
);
