import React from 'react';
import { render } from '@testing-library/react';
import { BasicComponentSearch } from './component-search.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicComponentSearch />);
  const rendered = getByText('hello from ComponentSearch');
  expect(rendered).toBeTruthy();
});
