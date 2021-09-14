import { MainRuntime } from '@teambit/cli';
import {
  GeneratorMain,
  GeneratorAspect,
  ComponentContext
} from '@teambit/generator';
import { ComponentTemplatesAspect } from './component-templates.aspect';

export class ComponentTemplatesMain {
  static slots = [];
  static dependencies = [GeneratorAspect];
  static runtime = MainRuntime;
  static async provider([generator]: [GeneratorMain]) {
    /**
     * Array of templates. Add as many templates as you want
     * Separate the templates to multiple files if you prefer
     * Modify, add or remove files as needed
     * See the docs file of this component for more info
     */

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

Detailed description of the component.

### Component Usage

How to use the component.

\`\`\`js
<${context.namePascalCase} text="hello" />
\`\`\`

### Live Playground

Modify the props and see the changes in the live playground.

\`\`\`js live
<${context.namePascalCase} text="hello" />
\`\`\`

### Design

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
      }

      // component 2
      //       {
      //         name: 'component2',
      //         description: 'description for component2',
      //         generateFiles: (context: ComponentContext) => {
      //           return [
      //             // index file
      //             {
      //               relativePath: 'index.ts',
      //               isMain: true,
      //               content: `export {} from '';
      // `
      //             }
      //           ];
      //         }
      //       }
    ]);

    return new ComponentTemplatesMain();
  }
}

ComponentTemplatesAspect.addRuntime(ComponentTemplatesMain);
