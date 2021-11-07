import React from 'react';
import { render } from '@testing-library/react';
import { BasicCollaboration } from './collaboration.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicCollaboration />);
  const rendered = getByText('hello from Collaboration');
  expect(rendered).toBeTruthy();
});
