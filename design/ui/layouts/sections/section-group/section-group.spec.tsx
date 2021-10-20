import React from 'react';
import { render } from '@testing-library/react';
import { BasicSectionGroup } from './section-group.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicSectionGroup />);
  const rendered = getByText('hello from SectionGroup');
  expect(rendered).toBeTruthy();
});
