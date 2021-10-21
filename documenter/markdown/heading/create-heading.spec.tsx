import React from 'react';
import { render } from '@testing-library/react';
import { CreateH1Example, CreateH2Example } from './create-heading.composition';

it('should render H1 size correctly', () => {
  const { getByTestId } = render(<CreateH1Example />);
  const rendered = getByTestId('test-create-heading');

  expect(rendered).toBeInTheDocument();
});
it('should render H2 size correctly', () => {
  const { getByTestId } = render(<CreateH2Example />);
  const rendered = getByTestId('test-create-heading');

  expect(rendered).toBeInTheDocument();
});
