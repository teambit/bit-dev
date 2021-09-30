import React from 'react';

export type FrameworkSelectorProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function FrameworkSelector({ text }: FrameworkSelectorProps) {
  return (
    <div>
      {text}
    </div>
  );
}
