import React from 'react';
import { render } from '@testing-library/react';
import { BasicBasicBackend } from './basic-backend.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicBasicBackend />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
