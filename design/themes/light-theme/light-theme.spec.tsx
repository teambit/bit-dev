import React from 'react';
import { render } from '@testing-library/react';
import { LightSchema } from './light-theme.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<LightSchema />);
  const rendered = getByText('primaryColor');
  expect(rendered).toBeTruthy();
});
