import React, { ReactNode } from 'react';

export type LightThemeProps = {
  /**
   * a text to be rendered in the component.
   */
  backgroundColor?: string

  children?: ReactNode
};

export function LightTheme({ backgroundColor, children }: LightThemeProps) {
  return <div>{children}</div>;
}
