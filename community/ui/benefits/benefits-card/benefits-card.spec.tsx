import React from 'react';
import { render } from '@testing-library/react';
import { BasicBenefitsCard } from './benefits-card.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBenefitsCard />);
  const rendered = getByText(
    'Component ownership is distributed across developer teams'
  );
  expect(rendered).toBeTruthy();
});
