import React, { useContext } from 'react';
import styles from './theme-toggler.module.scss';
import { ThemePickerContext } from './theme-picker-context';

export function ThemeToggler() {
  const ThemePicker = useContext(ThemePickerContext);
  if (!ThemePicker) return null;

  const { setTheme, options } = ThemePicker;
  const currentIdx = options.findIndex((x) => x === ThemePicker.current);
  const nextTheme = options[(currentIdx + 1) % options.length];
  if (!nextTheme) return null;
  const { Icon, displayName } = nextTheme;
  if (!Icon) return <div className={styles.toggler}>{displayName}</div>;
  return <Icon className={styles.toggler} onClick={() => setTheme(nextTheme)} />;
}
