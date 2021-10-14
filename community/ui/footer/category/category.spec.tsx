import React from 'react';
import { render } from '@testing-library/react';
import { BasicCategory } from './category.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCategory />);
  const rendered = getByText('hello from Category');
  expect(rendered).toBeTruthy();
});
