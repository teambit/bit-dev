import { ComponentContext } from '@teambit/generator';
import { indexFile } from './files/index';
import { componentFile } from './files/component-file';
import { docFile } from './files/doc-file';
import { mockFile } from './files/mock-file';

export const myEntityTemplate = {
  name: 'my-entity',
  description: 'entity component',
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

      // mock file
      {
        relativePath: `${context.name}.mock.ts`,
        content: mockFile(context)
      }
    ];
  }
};
