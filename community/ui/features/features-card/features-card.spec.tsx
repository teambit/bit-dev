import React from 'react';
import { render } from '@testing-library/react';
import { BasicFeaturesCard } from './features-card.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicFeaturesCard />);
  const rendered = getByText(
    'Component ownership is distributed across developer teams'
  );
  expect(rendered).toBeTruthy();
});
