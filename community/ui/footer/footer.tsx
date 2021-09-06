import React from 'react';

export type FooterProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Footer({ text }: FooterProps) {
  return (
    <div>
      {text}
    </div>
  );
}
