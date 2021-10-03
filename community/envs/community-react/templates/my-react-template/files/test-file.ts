import { ComponentContext } from '@teambit/generator';

export function testFile({ namePascalCase, name }: ComponentContext) {
  return `import React from 'react';
import { render } from '@testing-library/react';
import { Basic${namePascalCase} } from './${name}.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<Basic${namePascalCase} />);
  const rendered = getByText('hello from ${namePascalCase}');
  expect(rendered).toBeTruthy();
});
`;
}
