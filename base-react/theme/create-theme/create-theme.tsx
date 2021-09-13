import React from 'react';

export type CreateThemeProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function CreateTheme({ text }: CreateThemeProps) {
  return (
    <div>
      {text}
    </div>
  );
}
