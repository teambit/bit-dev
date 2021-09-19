import React from 'react';
import { Button } from '@teambit/design.ui.buttons.button';
import { CopyBox } from '@teambit/documenter.ui.copy-box';
import { BubbleCard } from './bubble-card';

export const WithButton = () => {
  return (
    <BubbleCard style={{ width: 170 }}>
      <Button>Getting Started</Button>
    </BubbleCard>
  );
}

export const WithCopyBox = () => {
  return (
    <BubbleCard style={{ width: 300 }}>
      <CopyBox>npx @teambit/bvm install</CopyBox>
    </BubbleCard>
  );
};
