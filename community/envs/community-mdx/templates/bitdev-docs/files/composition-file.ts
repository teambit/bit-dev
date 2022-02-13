import type { ComponentContext } from '@teambit/generator';

export function compositionFile({ namePascalCase }: ComponentContext) {
  return `import React from 'react';
import { ${namePascalCase} } from './index';

export const Basic${namePascalCase} = () => {
  return (
    <${namePascalCase} />
  );
};`;
}
