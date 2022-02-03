import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { createTheme } from '@teambit/base-react.theme.theme-provider';
import { BaseThemeType, baseThemeDefaults } from './base-theme-type';
import { getLegacyTokens } from './legacy-tokens';
import styles from './base-theme.module.scss';

const { useTheme, ThemeProvider } = createTheme<BaseThemeType>({
  theme: baseThemeDefaults,
});

export type BaseThemeProps = {
  overrides?: Partial<BaseThemeType>;
  children?: ReactNode;
};

export function BaseTheme({ overrides, children }: BaseThemeProps) {
  return (
    <ThemeProvider className={classNames(styles.bookFont, styles.dark)} overrides={overrides}>
      <LegacyThemeProvider>
        {children}
      </LegacyThemeProvider>
    </ThemeProvider>
  );
}

function LegacyThemeProvider({ children }: { children: ReactNode }) {
  const theme = useTheme();

  return <div style={getLegacyTokens(theme)}>{children}</div>;
}

export { useTheme };
