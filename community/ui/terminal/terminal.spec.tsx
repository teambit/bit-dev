import React from 'react';
import { render } from '@testing-library/react';
import { BasicTerminal } from './terminal.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTerminal />);
  const rendered = getByText('hello from Terminal');
  expect(rendered).toBeTruthy();
});
