import React, { ReactNode } from 'react';
import { BaseTheme } from '@teambit/design.ui.theme.base-theme';
import { lightTheme } from './variables';

export type LightThemeProps = {
  /**
   * modify the color.
   */
  backgroundColor?: string;

  children?: ReactNode;
};

export function LightTheme({ children }: LightThemeProps) {
  // TODO: oded fix that please
  // @ts-ignore
  return <BaseTheme theme={lightTheme}>{children}</BaseTheme>;
}
