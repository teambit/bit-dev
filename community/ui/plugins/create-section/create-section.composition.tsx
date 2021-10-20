import React from 'react';
import { highlightClass } from '@teambit/community.ui.heading';
import { BubbleGraph } from '@teambit/community.ui.graph.bubble-graph';
import { CreateSection, ComponentBubbleNonInteractive } from './create-section';
import { mockBubbleGraph } from './bubble-graph.mock';

export const BasicCreateSection = () => (
  <CreateSection
    heading={
      <>
        Create a new plugin <br />
        <span className={highlightClass}>in minutes</span>
      </>
    }
    subtitle="Bit is extremly extendible and you can add any tool or functionality in minutes and using over 800 available APIs. So what will you make?"
    data-testid="create-section"
  />
);

export const CreateBubbleGraph = () => (
  <BubbleGraph Node={ComponentBubbleNonInteractive} nodes={mockBubbleGraph()} data-testid="create-graph" />
);
