import { ComponentContext } from '@teambit/generator';
import { indexFile } from './files/index';
import { componentFile } from './files/component-file';
import { docFile } from './files/doc-file';
import { compositionFile } from './files/composition-file';
import { testFile } from './files/test-file';
import { scssFile } from './files/scss-file';

export const myReactTemplate = {
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
        content: compositionFile(context)
      },

      // test file
      {
        relativePath: `${context.name}.spec.tsx`,
        content: testFile(context)
      },
      // scss file
      {
        relativePath: `${context.name}.module.scss`,
        content: scssFile(context)
      }
    ];
  }
};
