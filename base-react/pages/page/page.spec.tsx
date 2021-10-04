import React from 'react';
import { render } from '@testing-library/react';
import { BasicPage } from './page.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicPage />);
  const rendered = getByText('my simple page');
  expect(rendered).toBeTruthy();
});
