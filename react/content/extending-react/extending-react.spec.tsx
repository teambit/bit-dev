import React from 'react';
import { render } from '@testing-library/react';
import { BasicExtendingReact } from './extending-react.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicExtendingReact />);
  const rendered = getByText('ExtendingReact');
  expect(rendered).toBeTruthy();
});
