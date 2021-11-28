import React from 'react';
import { render } from '@testing-library/react';
import { BasicNextPage } from './next-page.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicNextPage />);
  const rendered = getByText('hello from NextPage');
  expect(rendered).toBeTruthy();
});
