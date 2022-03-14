import React from 'react';
import { highlightClass } from '@teambit/community.ui.heading';
import { BubbleGraph } from '@teambit/community.ui.graph.bubble-graph';
import { ExploreSection, ComponentBubbleNonInteractive } from './explore-section';
import { mockBubbleGraph } from './bubble-graph.mock';

export const BasicExploreSection = () => (
  <ExploreSection
    heading={
      <>
        Explore <span className={highlightClass}>Endless Aspects of Bit</span>
      </>
    }
    subtitle="Enhance and customize your development experience with dozens of official and community Plugins."
    data-testid="explore-section"
  />
);

export const ExploreBubbleGraph = () => (
  <BubbleGraph Node={ComponentBubbleNonInteractive} nodes={mockBubbleGraph} data-testid="explore-graph" />
);
