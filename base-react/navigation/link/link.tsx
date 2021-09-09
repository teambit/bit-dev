import React from 'react';

export type LinkProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Link({ text }: LinkProps) {
  return (
    <div>
      {text}
    </div>
  );
}
