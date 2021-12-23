import { createTheme } from '@teambit/base-react.theme.create-theme';
import { BaseThemeType, baseThemeDefaults } from './base-theme-type';

const { useTheme, ThemeProvider, ThemeContext } = createTheme<BaseThemeType>({
  theme: baseThemeDefaults,
});

export { useTheme, ThemeProvider as BaseTheme, ThemeContext as BaseThemeContext };
