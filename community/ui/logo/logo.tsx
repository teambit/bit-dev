import React from 'react';

export type LogoProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Logo({ text }: LogoProps) {
  return (
    <div>
      {text}
    </div>
  );
}
