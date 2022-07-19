export const spec = `import { render } from '@testing-library/react';
import { BasicToDo } from './to-do.composition';

it('should render with the correct text', () => {
  const { getByPlaceholderText } = render(<BasicToDo />);
  const rendered = getByPlaceholderText(
    "Write a to do and hit the 'return' key"
  );
  expect(rendered).toBeTruthy();
});`;
