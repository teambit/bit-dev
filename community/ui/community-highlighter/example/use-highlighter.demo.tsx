import React from 'react';
import { ExampleComponent } from './example-component.demo';
import {
  CommunityHighlighter,
  useHighlighter,
} from '@teambit/community.ui.community-highlighter';

export const ExampleWithUseHighlighterHook = () => {
  return (
    <CommunityHighlighter>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <HighlighterSwitch />
      </div>
      <ExampleComponent />
    </CommunityHighlighter>
  );
};

/* use the use-highlighter hook in a component nested inside the community-highlighter */
const HighlighterSwitch = () => {
  const { disabled, setDisabled } = useHighlighter();

  return (
    <button
      onClick={() => setDisabled(!disabled)}
      style={{ padding: 10, marginBottom: 30 }}
    >
      Click to disable/enable highlighter
    </button>
  );
};
