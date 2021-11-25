import React from 'react';
import { render } from '@testing-library/react';
import { BasicHighlightComponent } from './highlight-component.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicHighlightComponent />);
  const rendered = getByText('Product card breakdown');
  expect(rendered).toBeTruthy();
});
