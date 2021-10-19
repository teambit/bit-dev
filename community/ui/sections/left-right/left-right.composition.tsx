import React from 'react';
import { LeftRight } from './left-right';
import { Terminal } from '@teambit/community.ui.terminal';

export const BasicLeftRight = () => (
  <LeftRight 
    title="Break the monolith" 
    text="Write less code and make your apps consistent by reusing your components. Discover and compose components to accelerate your work and build on what's been built." 
  >
    <Terminal>my text</Terminal>
  </LeftRight>
);
