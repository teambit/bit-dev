import React from 'react';
import { render } from '@testing-library/react';
import { BasicSubtitle } from './subtitle.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSubtitle />);
  const rendered = getByText('Bit helps build components and compose them into infinite features and apps');
  expect(rendered).toBeTruthy();
});
