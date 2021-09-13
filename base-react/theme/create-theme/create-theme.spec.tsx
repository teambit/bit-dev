import React from 'react';
import { render } from '@testing-library/react';
import { BasicCreateTheme } from './create-theme.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCreateTheme />);
  const rendered = getByText('hello from CreateTheme');
  expect(rendered).toBeTruthy();
});
