import React from 'react';
import { ExampleComponent } from './example-component.demo';
import {
  CommunityHighlighter,
  Toggler,
} from '@teambit/community.ui.community-highlighter';

/* use the toggler anywhere, nested under the community-highlighter, to disable/enable highlighting */
export const ExampleWithToggler = () => {
  return (
    <CommunityHighlighter>
      <Toggler />
      <ExampleComponent />
    </CommunityHighlighter>
  );
};
