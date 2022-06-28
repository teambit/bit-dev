export const spec = `/**
* This is the component's test file.
*
* Test files often use the component's 'compositions'
* as they offer a specific state and context to test.
*
* Test files validate a component and its dependents are
* functioning as expected, before components are versioned.
*/
import React from 'react';
import { render } from '@testing-library/react';
import { BasicButton } from './button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicButton />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
`;
