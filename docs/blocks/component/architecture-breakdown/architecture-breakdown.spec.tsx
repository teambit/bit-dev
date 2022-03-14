import React from 'react';
import { render } from '@testing-library/react';
import { BasicArchitectureBreakdown } from './architecture-breakdown.composition';

// getting error `TypeError: _c.getTotalLength is not a function`
// from react-xarrows
// https://github.com/Eliav2/react-xarrows/issues/110
it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicArchitectureBreakdown />);
  const rendered = getByText('Component architecture');
  expect(rendered).toBeTruthy();
});
