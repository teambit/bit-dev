import React from 'react';
import { render } from '@testing-library/react';
import { BasicHero } from './hero.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicHero />);
  const rendered = getByText('hello from Hero');
  expect(rendered).toBeTruthy();
});
