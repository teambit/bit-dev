import React from 'react';
import { highlightClass } from '@teambit/community.ui.heading';
import { mockExplorePluginsGraph } from '@teambit/community.ui.plugins.bubble-graph-mocks';
import { ComponentBubbleNonInteractive } from '@teambit/community.ui.graph.component-bubble-non-interactive';
import { ExploreSection } from './explore-section';

export const BasicExploreSection = () => (
  <ExploreSection
    heading={
      <>
        Explore <span className={highlightClass}>Bit Plugins</span>
      </>
    }
    subtitle="Enhance and customize your development experience with dozens of official and community Plugins."
    Node={ComponentBubbleNonInteractive}
    nodes={mockExplorePluginsGraph()}
    data-testid="explore-section"
  />
);
