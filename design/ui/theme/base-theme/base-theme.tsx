import { createTheme } from '@teambit/base-react.theme.theme-provider';
import { BaseThemeType, baseThemeDefaults } from './base-theme-type';

const { useTheme, ThemeProvider } = createTheme<BaseThemeType>({
  theme: baseThemeDefaults,
});

export { useTheme, ThemeProvider as BaseTheme };
