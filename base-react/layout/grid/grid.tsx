import React from 'react';

export type GridProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Grid({ text }: GridProps) {
  return (
    <div>
      {text}
    </div>
  );
}
