import React from 'react';
import { ComponentBubbleNonInteractive } from './component-bubble-non-interactive';

export const BasicComponentBubbleNonInteractive = () => {
  const node = {
    payload: {
      icon: 'https://static.bit.dev/brands/logo-react.svg',
    },
  };
  //@ts-ignore
  return <ComponentBubbleNonInteractive node={node} data-testid="test-component-bubble" />;
};
