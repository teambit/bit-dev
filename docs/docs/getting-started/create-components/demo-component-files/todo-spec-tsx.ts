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
import { BasicToDo } from './to-do.composition';

it('should render with the correct text', () => {
  const { getByPlaceholderText } = render(<BasicToDo />);
  const rendered = getByPlaceholderText(
    "Write a to do and hit the 'return' key"
  );
  expect(rendered).toBeTruthy();
});`;
