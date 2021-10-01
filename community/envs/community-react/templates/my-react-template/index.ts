import { ComponentContext } from '@teambit/generator';
import { indexFile } from './files/index';
import { componentFile } from './files/component-file';
import { docFile } from './files/doc-file';

// TODO: @debbie please refactor to multiple files. See templates in the React env as reference.
export const componentTemplates = [
      {
        name: 'my-react',
        description: 'react components with figma embed and scss',
        generateFiles: (context: ComponentContext) => {
          return [
            // index file
            {
              relativePath: 'index.ts',
              isMain: true,
              content: indexFile(context)
            },

            // component file
            {
              relativePath: `${context.name}.tsx`,
              content: componentFile(context)
            },

            // docs file
            {
              relativePath: `${context.name}.docs.mdx`,
              content: docFile(context)
            },

            // composition file
            {
              relativePath: `${context.name}.composition.tsx`,
              content: `import React from 'react';
import { ${context.namePascalCase} } from './${context.name}';

export const Basic${context.namePascalCase}  = () => (
  <${context.namePascalCase}  text="hello from ${context.namePascalCase} " />
);
`
            },

            // test file
            {
              relativePath: `${context.name}.spec.tsx`,
              content: `import React from 'react';
import { render } from '@testing-library/react';
import { Basic${context.namePascalCase} } from './${context.name}.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<Basic${context.namePascalCase} />);
  const rendered = getByText('hello from ${context.namePascalCase}');
  expect(rendered).toBeTruthy();
});
`
            },
            // scss file
            {
              relativePath: `${context.name}.module.scss`,
              content: `.${context.nameCamelCase}{

}
`
            }
          ];
        }
      },

      // entity component
      {
        name: 'my-entity',
        description: 'entity component',
        generateFiles: (context: ComponentContext) => {
          return [
            // index file
            {
              relativePath: 'index.ts',
              isMain: true,
              content: `export { ${context.namePascalCase} } from './${context.name}';
export type { ${context.namePascalCase}Props } from './${context.name}';
export { mock${context.namePascalCase} } from './${context.name}.mock';
      `
            },
            // component file
            {
              relativePath: `${context.name}.ts`,
              content: `export type ${context.namePascalCase}Props = {
  id: string;
  version: string;
};

export class ${context.namePascalCase} {
  constructor(
    /**
     * ID of the component
     */
    readonly id: string,

    /**
     * version of the component
     */
    readonly version: string,
  ) {}

  static fromObject(plain${context.namePascalCase}: ${context.namePascalCase}Props) {
    return new ${context.namePascalCase}(
      plain${context.namePascalCase}.id,
      plain${context.namePascalCase}.version,
    );
  }
}
`
            },
            // mock file
            {
              relativePath: `${context.name}.mock.ts`,
              content: `export const mock${context.namePascalCase} = [
  {
    id: 'teambit.community/ui/homepage/logo@1.0.1',
    version: '2.3.0'
  },
]
`
            },
            // docs file
            {
              relativePath: `${context.name}.docs.mdx`,
              content: `---
description: 'Entity component for ${context.namePascalCase}'
labels: ['mock', 'data', 'entity', 'types']
---

import { ${context.namePascalCase} } from './${context.name}';

Array of types for the ${context.name}.

\`\`\`js
id: string;
version: string;
\`\`\`

## Mock Json

Mock data for ${context.namePascalCase}

\`\`\`json
export const ${context.namePascalCase} = [
  {
    id: 'teambit.community/ui/homepage/logo@1.0.1',
    version: '2.3.0'
  }
];
\`\`\`
`
        }
      ];
    }
  }
];
