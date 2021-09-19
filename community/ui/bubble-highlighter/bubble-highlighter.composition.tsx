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
