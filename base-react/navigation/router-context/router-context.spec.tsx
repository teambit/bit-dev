import React from 'react';
import { render } from '@testing-library/react';
import { BasicRouterContext } from './router-context.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicRouterContext />);
  const rendered = getByText('hello from RouterContext');
  expect(rendered).toBeTruthy();
});
