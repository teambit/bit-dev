import React from 'react';
import { Terminal } from './terminal';

const outputContent = `  Resolving component dependencies for workspace: 'react-grap'
✔ import 5 components with their dependencies (if missing)
  installing dependencies in workspace using teambit.dependencies/pnpm
✔ running pre install subscribers
✔ deduping dependencies for installation`;

export const BasicTerminal = () => {
  return <Terminal>cd my-worksspace</Terminal>;
};

export const Output = () => {
  return <Terminal isOutput>{outputContent}</Terminal>;
};

export const CustomHighlighting = () => {
  const highlighting: any = {
    color: '#9cdcfe',
    textTransform: 'uppercase',
  };
  return (
    <Terminal>
      bit fork <span style={highlighting}>component_id</span>
    </Terminal>
  );
};
