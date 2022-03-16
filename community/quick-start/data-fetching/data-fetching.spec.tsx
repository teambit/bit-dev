import React from 'react';
import { render } from '@testing-library/react';
import { BasicDataFetching } from './data-fetching.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicDataFetching />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
