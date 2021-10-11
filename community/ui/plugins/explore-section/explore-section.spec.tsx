import React from 'react';
import { render } from '@testing-library/react';
import { BasicExploreSection } from './explore-section.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicExploreSection />);
  const rendered = getByText('hello from Hero');
  expect(rendered).toBeTruthy();
});
