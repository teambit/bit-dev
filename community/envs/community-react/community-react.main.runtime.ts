import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain } from '@teambit/react';
import {
  GeneratorMain,
  GeneratorAspect,
  ComponentContext
} from '@teambit/generator';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { CommunityReactAspect } from './community-react.aspect';
// import { previewConfigTransformer, devServerConfigTransformer } from './webpack/webpack-transformers';

/**
 * Uncomment to include config files for overrides of Typescript or Webpack
 */
// const tsconfig = require('./typescript/tsconfig');

export class CommunityReactMain {
  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect, GeneratorAspect];

  static runtime = MainRuntime;

  static async provider([react, envs, generator]: [
    ReactMain,
    EnvsMain,
    GeneratorMain
  ]) {
    const templatesReactEnv = envs.compose(react.reactEnv, [
      /**
       * Uncomment to override the config files for TypeScript, Webpack or Jest
       * Your config gets merged with the defaults
       */

      // react.overrideTsConfig(tsconfig),
      // react.useWebpack({
      //   previewConfig: [previewConfigTransformer],
      //   devServerConfig: [devServerConfigTransformer],
      // }),
      // react.overrideJestConfig(require.resolve('./jest/jest.config')),

      /**
       * override the ESLint default config here then check your files for lint errors
       * @example
       * bit lint
       * bit lint --fix
       */
      react.useEslint({
        transformers: [
          (config) => {
            config.setRule('no-console', ['error']);
            return config;
          }
        ]
      }),

      /**
       * override the Prettier default config here the check your formatting
       * @example
       * bit format --check
       * bit format
       */
      react.usePrettier({
        transformers: [
          (config) => {
            config.setKey('tabWidth', 2);
            return config;
          }
        ]
      }),

      /**
       * override dependencies here
       * @example
       * Uncomment types to include version 17.0.3 of the types package
       */
      react.overrideDependencies({
        devDependencies: {
          // '@types/react': '17.0.3'
        }
      })
    ]);
    envs.registerEnv(templatesReactEnv);

    generator.registerComponentTemplate([
      {
        name: 'my-react',
        description: 'react components with figma embed and scss',
        generateFiles: (context: ComponentContext) => {
          return [
            // index file
            {
              relativePath: 'index.ts',
              isMain: true,
              content: `export { ${context.namePascalCase} } from './${context.name}';
export type { ${context.namePascalCase}Props } from './${context.name}';
`
            },

            // component file
            {
              relativePath: `${context.name}.tsx`,
              content: `import React from 'react';
import classNames from 'classnames';
import styles from './${context.name}.module.scss';


export type ${context.namePascalCase}Props = {
  /**
   * a text to be rendered in the component.
   */
  text: string
} & React.HTMLAttributes<HTMLDivElement>;

export function ${context.namePascalCase}({ text, className }: ${context.namePascalCase}Props) {
  return (
    <div className={classNames(styles.${context.nameCamelCase}, className)}>
      {text}
    </div>
  );
}`
            },

            // docs file
            {
              relativePath: `${context.name}.docs.mdx`,
              content: `---
description: '${context.namePascalCase}'
labels: ['label1', 'label2', 'label3']
---

import { ${context.namePascalCase} } from './${context.name}';
import { FigmaEmbed } from '@teambit/design.embeds.figma';

// Add a description of your component
Detailed description of the component.

// Show how to use the component if not using live playground
### Component Usage

\`\`\`js
<${context.namePascalCase} text="hello" />
\`\`\`

// Describe what is shown in the live playground
### Shows a text of Hello

\`\`\`js live
<${context.namePascalCase} text="hello" />
\`\`\`

// Add more live playground examples if it makes sense

### Design

// add the url to Figma file if there are any design elements or remove if not using
<FigmaEmbed src="" />
`
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
    ]);

    return new CommunityReactMain();
  }
}

CommunityReactAspect.addRuntime(CommunityReactMain);
