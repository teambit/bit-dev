import React from 'react';

export type ContentNavProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function ContentNav({ text }: ContentNavProps) {
  return (
    <div>
      {text}
    </div>
  );
}
