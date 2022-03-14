import React from 'react';
import { FeaturesCard } from './example/example.demo';
import { useHighlighter } from './use-highlighter';
import { CommunityHighlighter } from './community-highlighter';
import { Toggler } from './toggler';

export const BasicUsage = () => {
  return (
    <CommunityHighlighter>
      <FeaturesCard />
    </CommunityHighlighter>
  );
};

/* use the toggler component to disable/enable highlighting */
export const DisableWithToggler = () => {
  return (
    <CommunityHighlighter>
      <Toggler />
      <FeaturesCard />
    </CommunityHighlighter>
  );
};

export const DisableWithUseHighlighterHook = () => {
  return (
    <CommunityHighlighter>
      <DisableHighlighter />
      <FeaturesCard />
    </CommunityHighlighter>
  );
};
/* use the use-highlighter to disble highlighting */
const DisableHighlighter = () => {
  const { disabled, setDisabled } = useHighlighter();
  setDisabled(true);
  return <></>;
};
