import React from 'react';
import { render } from '@testing-library/react';
import { BasicLightTheme } from './light-theme.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicLightTheme />);
  const rendered = getByText('hello from LightTheme');
  expect(rendered).toBeTruthy();
});
