import React from 'react';
import { ComponentID } from '@teambit/component-id';
import { Button } from '@teambit/design.ui.buttons.button';
import { BubbleHighlighter } from './bubble-highlighter';

export const BasicBubbleHighlighter = () => {
  const id = ComponentID.fromString('teambit.design/ui/buttons/button');
  return (
    <BubbleHighlighter componentId={id} style={{ width: 170 }}>
      <Button>Getting Started</Button>
    </BubbleHighlighter>
  );
};

export const BubbleHighlighterWithLabel = () => {
  const id = ComponentID.fromString('teambit.design/ui/buttons/button');
  return (
    <div style={{ marginTop: 30, marginLeft: 30 }}>
      <BubbleHighlighter componentId={id} showId style={{ width: 170 }}>
        <Button>Getting Started</Button>
      </BubbleHighlighter>
    </div>
  );
};

BubbleHighlighterWithLabel.canvas = {
  width: 300,
  height: 150,
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  marginLeft: -15,
};
