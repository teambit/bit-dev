import React from 'react';
import { render } from '@testing-library/react';
import { BasicComponentCardGroup } from './component-card-group.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicComponentCardGroup />);
  const rendered = getByText('hello from ComponentCardGroup');
  expect(rendered).toBeTruthy();
});
