import React from 'react';
import { render } from '@testing-library/react';
import { BasicTopBar } from './top-bar.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTopBar />);
  const rendered = getByText('hello from TopBar');
  expect(rendered).toBeTruthy();
});
