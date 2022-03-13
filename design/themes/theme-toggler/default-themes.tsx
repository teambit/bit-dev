import { BaseTheme } from '@teambit/design.themes.base-theme';
import { LightTheme } from '@teambit/design.themes.light-theme';
import { DarkTheme } from '@teambit/design.themes.dark-theme';
import { ThemeOption } from './theme-picker-context';

export const DefaultThemeProvider = BaseTheme;
export const LightAndDarkThemes: ThemeOption[] = [LightTheme, DarkTheme];
