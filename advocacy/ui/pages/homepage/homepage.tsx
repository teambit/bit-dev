import React from 'react';

export type HomepageProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Homepage({ text }: HomepageProps) {
  return (
    <div>
      {text}
    </div>
  );
}
