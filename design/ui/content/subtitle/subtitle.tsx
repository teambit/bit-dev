import React from 'react';

export type SubtitleProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Subtitle({ text }: SubtitleProps) {
  return (
    <div>
      {text}
    </div>
  );
}
