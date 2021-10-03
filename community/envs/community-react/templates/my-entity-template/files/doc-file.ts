import { ComponentContext } from '@teambit/generator';

export function docFile({ name, namePascalCase }: ComponentContext) {
  return `---
description: 'Entity component for ${namePascalCase}'
labels: ['mock', 'data', 'entity', 'types']
---

import { ${namePascalCase} } from './${name}';

Array of types for the ${name}.

\`\`\`js
key: string;
key2: string;
\`\`\`

## Mock Json

Mock data for ${namePascalCase}

\`\`\`json
export const ${namePascalCase} = [
  {
    key: 'value',
    key2: 'value2'
  }
];
\`\`\`
`;
}
