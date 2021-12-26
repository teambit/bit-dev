import React from 'react';
import { render } from '@testing-library/react';
import { BaseTheme, LightTheme, DarkTheme } from './theme-provider.composition';

it.skip('should render with the correct text', () => {
  const { queryByTestId } = render(<BaseTheme />);
  const element = queryByTestId('base-theme');
  if (!element) throw new Error('base-theme not found');
  const styles = getComputedStyle(element);

  expect(styles.backgroundColor).toBe('white');
});
