import React from 'react';
import { Terminal } from './terminal';

const text = `
Resolving component dependencies for workspace: 'bit.dev'
✔ importing 79 components with their dependencies (if missing)
  installing dependencies in workspace using pnpm
✔ running pre install subscribers
✔ deduping dependencies for installation
Already up-to-date
Progress: resolved 359, reused 358, downloaded 1, added 4, done

dependencies:
+ @teambit/design.ui.cli-snippet 0.0.347
  -------------------------
✔ installing dependencies using pnpm
✔ running post install subscribers
✔ linking components
Successfully resolved dependencies for 84 component(s) in 11.201 seconds
`

export const BasicTerminal = () => (
  <Terminal animate>{text}</Terminal>
);
