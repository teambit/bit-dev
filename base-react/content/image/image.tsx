import React from 'react';

export type ImageProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Image({ text }: ImageProps) {
  return (
    <div>
      {text}
    </div>
  );
}
