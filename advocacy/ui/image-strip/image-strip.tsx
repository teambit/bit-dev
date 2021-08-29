import React from 'react';

export type ImageStripProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function ImageStrip({ text }: ImageStripProps) {
  return (
    <div>
      {text}
    </div>
  );
}
