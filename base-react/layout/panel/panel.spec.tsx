import React from 'react';
import { render } from '@testing-library/react';
import { BasicPanel } from './panel.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicPanel />);
  const rendered = getByText('hello from Panel');
  expect(rendered).toBeTruthy();
});
