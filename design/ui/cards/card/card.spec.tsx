import React from 'react';
import { render } from '@testing-library/react';
import { BasicCard } from './card.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCard />);
  const rendered = getByText('General purpose content');
  expect(rendered).toBeTruthy();
});
