import React from 'react';
import { render } from '@testing-library/react';
import { WithButton } from './bubble-card.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<WithButton />);
  const rendered = getByText('Getting Started');
  expect(rendered).toBeTruthy();
});
