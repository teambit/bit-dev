import React from 'react';

export type HeadingProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Heading({ text }: HeadingProps) {
  return (
    <div>
      {text}
    </div>
  );
}
