import React from 'react';
import { FileExplorer } from '@teambit/community.ui.file-explorer';
import { composition } from './demo-component-files/button-composition-tsx';
import { docs } from './demo-component-files/button-docs-mdx';
import { spec } from './demo-component-files/button-spec-tsx';
import { button } from './demo-component-files/button-tsx';
import { index } from './demo-component-files/index-ts';

const files = {
  'button.composition.tsx': composition,
  'button.docs.mdx': docs,
  'button.spec.tsx': spec,
  'button.tsx': button,
  'index.ts': index,
};

export const ExploreComponentFiles = () => (
  <FileExplorer
    options={{
      contentFontSize: 13,
      fileTreeWidth: 230,
      isDirOpen: true,
      title: 'my-scope/ui/button',
      wordWrap: 'off',
    }}
    style={{ minHeight: 400 }}
    files={files}
    defaultFile="index.ts"
  />
);
