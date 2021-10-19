import React from 'react';
import { TopDown } from './top-down';
import { Terminal } from '@teambit/community.ui.terminal';

export const BasicTopDown = () => {
  return (
    <TopDown 
      title="Create. Compose. Collaborate"
      subtitle="Create new components quickly and compose them with others, based on pre-made community templates, or build templates of your own to accelerate your component development workflow."
    >
      <Terminal>Content</Terminal>
    </TopDown>
  );
};
