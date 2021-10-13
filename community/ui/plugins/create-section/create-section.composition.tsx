import React from 'react';
import { highlightClass } from '@teambit/community.ui.heading';
import { mockCreatePluginsGraph } from '@teambit/community.ui.plugins.bubble-graph-mocks';
import { ComponentBubbleNonInteractive } from '@teambit/community.ui.graph.component-bubble-non-interactive';
import { CreateSection } from './create-section';

export const BasicCreateSection = () => (
  <CreateSection
    heading={
      <>
        Create a new plugin <br />
        <span className={highlightClass}>in minutes</span>
      </>
    }
    subtitle="Bit is extremly extendible and you can add any tool or functionality in minutes and using over 800 available APIs. So what will you make?"
    Node={ComponentBubbleNonInteractive}
    nodes={mockCreatePluginsGraph()}
    data-testid="create-section"
  />
);
