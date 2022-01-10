import React from 'react';
import { render } from '@testing-library/react';
import { BasicBaseTheme } from './base-theme.composition';


// TODO: oded you an error here
it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicBaseTheme />);
  const rendered = getByText('hello from BaseTheme');
  expect(rendered).toBeTruthy();
});
