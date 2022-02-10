import React from 'react';
import { ExampleComponent } from './example/example-component';
import { useHighlighter } from './use-highlighter';
import { CommunityHighlighter } from './community-highlighter';
import { Toggler } from './toggler';

export const BasicUsage = () => {
  return (
    <CommunityHighlighter>
      <ExampleComponent />
    </CommunityHighlighter>
  );
};

/* use the toggler component to disable/enable highlighting */
export const DisableWithToggler = () => {
  return (
    <CommunityHighlighter>
      <Toggler />
      <ExampleComponent />
    </CommunityHighlighter>
  );
};

export const DisableWithUseHighlighterHook = () => {
  return (
    <CommunityHighlighter>
      <DisableHighlighter />
      <ExampleComponent />
    </CommunityHighlighter>
  );
};
/* use the use-highlighter to disble highlighting */
const DisableHighlighter = () => {
  const { disabled, setDisabled } = useHighlighter();
  setDisabled(true);
  return <></>;
};
