import React from 'react';
import { createTheme } from './create-theme';

export const BasicCreateTheme = () => {
  const MyThemeSchema = {
    backgroundColor: 'red',
  };
  const { ThemeProvider, useTheme } = createTheme<typeof MyThemeSchema>({
    theme: MyThemeSchema,
  });

  const theme = useTheme();

  return (
    <ThemeProvider>
      <div style={{ backgroundColor: theme.backgroundColor }}>hi there</div>
    </ThemeProvider>
  );
};
