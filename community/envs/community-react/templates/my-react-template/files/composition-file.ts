import { ComponentContext } from '@teambit/generator';

export function compositionFile({ namePascalCase, name }: ComponentContext) {
  return `import React from 'react';
import { ${namePascalCase} } from './${name}';

export const Basic${namePascalCase} = () => (
  <${namePascalCase} text="hello from ${namePascalCase}" />
);
`;
}
