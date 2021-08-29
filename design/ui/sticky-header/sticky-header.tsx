import React from 'react';

export type StickyHeaderProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function StickyHeader({ text }: StickyHeaderProps) {
  return (
    <div>
      {text}
    </div>
  );
}
