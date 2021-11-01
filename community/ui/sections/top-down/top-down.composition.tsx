import React from 'react';
import { Terminal } from '@teambit/community.ui.terminal';
import { TopDown } from './top-down';

export const BasicTopDown = () => (
  <TopDown
    title="Create. Compose. Collaborate"
    subtitle="Create new components quickly and compose them with others, based on pre-made community templates, or build templates of your own to accelerate your component development workflow."
  >
    <Terminal content="Content" />
  </TopDown>
);
