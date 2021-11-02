import React from 'react';
import { Terminal } from './terminal';

const longText = `Resolving component dependencies for workspace: 'bit.dev'
✔ importing 79 components with their dependencies (if missing)
  installing dependencies in workspace using pnpm
✔ running pre install subscribers
✔ deduping dependencies for installation
Already up-to-date
Progress: resolved 359, reused 358, downloaded 1, added 4, done

dependencies:
\u001b[36m + @teambit/design.ui.cli-snippet 0.0.347
  -------------------------
✔ installing dependencies using pnpm
✔ running post install subscribers
✔ linking components
Successfully resolved dependencies for 84 component(s) in 11.201 seconds`;

export const AnimatedLoopTerminal = () => (
  <div style={{ height: 52 }}>
    <Terminal content="hello from Terminal" animate loop />
  </div>
);

export const AnimatedTerminal = () => <Terminal content="hello from Terminal" animate />;

export const BasicTerminal = () => <Terminal content="hello from Terminal" />;

export const AnimatedLoopOutput = () => (
  <div style={{ width: 800 }}>
    <Terminal content={longText} animate loop delay={20} />
  </div>
);

export const AnimatedOutput = () => (
  <div style={{ width: 800 }}>
    <Terminal content={longText} animate />
  </div>
);

export const BasicOutput = () => (
  <div style={{ width: 800 }}>
    <Terminal content={longText} />
  </div>
);
