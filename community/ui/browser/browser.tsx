import React from 'react';

export type BrowserProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Browser({ text }: BrowserProps) {
  return (
    <div>
      {text}
    </div>
  );
}
