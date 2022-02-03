import React from 'react';
import { BaseThemeType } from './base-theme-type';

export function getLegacyTokens(theme: BaseThemeType): React.CSSProperties {
  return {
    '--bit-text-color': theme.onBackgroundColor,
    '--bit-bg-bedrock': theme.backgroundColor,
    '--bit-bg-color': theme.surfaceColor,
    '--bit-border-color-lightest': theme.surfaceHoverColor,
    '--bit-bg-heavy': theme.surfaceHoverColor,
    '--bit-accent-bg': theme.surfaceActiveColor,
    '--bit-text-color-light': theme.onBackgroundColorMedium,
    '--bit-accent-color': theme.primaryColor,
    '--bit-border-color': theme.borderColor,
  } as React.CSSProperties;
}
