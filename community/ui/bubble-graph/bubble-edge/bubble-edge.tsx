import React from 'react';

export type BubbleEdgeProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function BubbleEdge({ text }: BubbleEdgeProps) {
  return (
    <div>
      {text}
    </div>
  );
}
