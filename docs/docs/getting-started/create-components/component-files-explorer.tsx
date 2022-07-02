import React from 'react';
import { FileExplorer } from '@teambit/community.ui.file-explorer';
import { composition } from './demo-component-files/todo-composition-tsx';
import { docs } from './demo-component-files/todo-docs-mdx';
import { spec } from './demo-component-files/todo-spec-tsx';
import { todo } from './demo-component-files/todo-tsx';
import { index } from './demo-component-files/index-ts';

const files = {
  'todo.composition.tsx': composition,
  'todo.docs.mdx': docs,
  'todo.spec.tsx': spec,
  'todo.tsx': todo,
  'index.ts': index,
};

export const ExploreComponentFiles = () => (
  <FileExplorer
    options={{
      contentFontSize: 13,
      fileTreeWidth: 230,
      isDirOpen: true,
      title: 'tasks-scope/ui/todo',
      wordWrap: 'off',
    }}
    style={{ minHeight: 400 }}
    files={files}
    defaultFile="index.ts"
  />
);
