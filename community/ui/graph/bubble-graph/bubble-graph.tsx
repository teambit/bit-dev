import React from 'react';

export type BubbleGraphProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function BubbleGraph({ text }: BubbleGraphProps) {
  return (
    <div>
      {text}
    </div>
  );
}
