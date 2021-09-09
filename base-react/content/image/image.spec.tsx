import React from 'react';
import { render } from '@testing-library/react';
import { BasicImage } from './image.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicImage />);
  const rendered = getByText('hello from Image');
  expect(rendered).toBeTruthy();
});
