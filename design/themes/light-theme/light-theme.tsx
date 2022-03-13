import React, { ReactNode } from 'react';
import { BaseTheme, baseThemeDefaults, BaseThemeProps } from '@teambit/design.themes.base-theme';
import { LightThemeIcon } from './light-theme.icon';

export type LightThemeProps = {
  children?: ReactNode;
};

export const lightThemeValues = baseThemeDefaults;
export function LightTheme(props: BaseThemeProps) {
  return <BaseTheme {...props} />;
}

// theme metadata
LightTheme.Icon = LightThemeIcon;
LightTheme.themeName = 'light';
