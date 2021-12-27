import React from 'react';
import { render } from '@testing-library/react';
import { BasicUseComponentSearch } from './use-component-search.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicUseComponentSearch />);
  const rendered = getByText('hello from UseComponentSearch');
  expect(rendered).toBeTruthy();
});
