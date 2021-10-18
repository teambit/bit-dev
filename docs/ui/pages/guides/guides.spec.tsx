import React from 'react';
import { render } from '@testing-library/react';
import { BasicGuides } from './guides.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicGuides />);
  const rendered = getByText('Micro');
  expect(rendered).toBeTruthy();
});
