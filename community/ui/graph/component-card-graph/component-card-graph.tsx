import React from 'react';

export type ComponentCardGraphProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function ComponentCardGraph({ text }: ComponentCardGraphProps) {
  return (
    <div>
      {text}
    </div>
  );
}
