import React from 'react';
import { render } from '@testing-library/react';
import { BasicExtendability } from './extendability.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicExtendability />);
  const rendered = getByText('hello from Extendability');
  expect(rendered).toBeTruthy();
});
