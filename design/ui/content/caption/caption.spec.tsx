import React from 'react';
import { render } from '@testing-library/react';
import { BasicCaption } from './caption.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCaption />);
  const rendered = getByText('My Caption');
  expect(rendered).toBeTruthy();
});
