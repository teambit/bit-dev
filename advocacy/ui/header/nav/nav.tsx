import React from 'react';

export type NavProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Nav({ text }: NavProps) {
  return (
    <div>
      {text}
    </div>
  );
}
