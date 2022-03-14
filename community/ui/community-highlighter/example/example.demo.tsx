/* this file is used for the Community Highlighter demo */
import React from 'react';
import { FeaturesCard } from '@teambit/community.ui.features.features-card';
import { CommunityHighlighter } from '../community-highlighter';
import { useHighlighter } from '../use-highlighter';

const ExampleComponent = () => (
  <FeaturesCard
    title="Hover over me!"
    text="Click on the scope name/component name labels to visit their pages. "
    image="https://static.bit.dev/Community/features/distributed.svg"
    alt="an example component"
  />
);

export const Example = () => {
  return (
    <CommunityHighlighter>
      <EnableCommunityHighlighter />
      <ExampleComponent />
    </CommunityHighlighter>
  );
};

const EnableCommunityHighlighter = () => {
  const { disabled, setDisabled } = useHighlighter();
  setDisabled(false);
  return <></>;
};

export const snippet = `import { CommunityHighlighter } from '@teambit/community.ui.community-highlighter';
import { FeaturesCard } from '@teambit/community.ui.features.features-card';

const MyHighlightedApp = () => {
  return (
    <CommunityHighlighter>
      <FeaturesCard />
    </CommunityHighlighter>;
  )
}`;

export { ExampleComponent as FeaturesCard };
