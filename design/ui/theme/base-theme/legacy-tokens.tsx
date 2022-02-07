import React from 'react';
import { BaseThemeSchema } from './base-theme-schema';

export function getLegacyTokens(theme: BaseThemeSchema): React.CSSProperties {
  return {
    // texts:
    '--bit-text-color': theme.onBackgroundColorHigh,
    '--bit-text-color-light': theme.onBackgroundColorMedium,
    '--bit-text-color-heavy': theme.onBackgroundColorHigh,
    // '--bit-text-inactive': 'yellow', // TODO - @Amir set me
    '--bit-text-inactive-heavy': theme.onBackgroundColorLow,

    // backgrounds:
    '--bit-bg-bedrock': theme.backgroundColor,

    '--bit-bg-color': theme.surfaceColor,
    '--bit-bg-heavy': theme.surfaceHoverColor,
    '--bit-bg-heaviest': theme.surfaceActiveColor, // new
    '--bit-bg-dent': theme.surfaceHoverColor, // new
    '--bit-bg-tooltip': theme.surfaceActiveColor, // new

    // // intractable item
    // '--bit-bg-navigation': 'yellow', // TODO - @Amir set me
    // '--bit-bg-overlay': 'yellow', // TODO - @Amir set me
    // '--bit-bg-modal': 'yellow', // TODO - @Amir set me
    // '--bit-bg-tooltip-heavy': 'yellow', // TODO - @Amir set me

    // borders:
    '--bit-border-color-lightest': theme.surfaceHoverColor,
    '--bit-border-color': theme.borderColor,
    '--bit-border-color-heavy': theme.borderColor, // TODO - @Amir set me
    // '--bit-border-color-light': 'yellow', // TODO - @Amir set me

    // primary color:
    '--bit-accent-color': theme.primaryColor,
    '--bit-p-xs': '13px',
    // '--bit-accent-heavy': 'black', // TODO - @Amir set me
    // '--bit-accent-light': 'yellow', // TODO - @Amir set me
    // '--bit-accent-text': 'yellow', // TODO - @Amir set me
    // '--bit-accent-text-heavy': 'yellow', // TODO - @Amir set me
    // '--bit-text-on-accent': 'yellow', // TODO - @Amir set me
    '--bit-accent-bg': theme.surfaceActiveColor,
    // '--bit-accent-bg-heavy': 'yellow', // TODO - @Amir set me
  } as React.CSSProperties;
}
