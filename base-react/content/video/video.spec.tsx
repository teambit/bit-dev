import React from 'react';
import { render } from '@testing-library/react';
import { BasicVideo } from './video.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicVideo />);
  const rendered = getByText('hello from Video');
  expect(rendered).toBeTruthy();
});
