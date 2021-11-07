import React from 'react';
import { render } from '@testing-library/react';
import { BasicAutonomy } from './autonomy.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicAutonomy />);
  const rendered = getByText('hello from Autonomy');
  expect(rendered).toBeTruthy();
});
