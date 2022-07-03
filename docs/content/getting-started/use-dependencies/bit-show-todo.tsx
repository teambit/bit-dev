import React from 'react';
import { BitShowExplorer } from '@teambit/community.ui.bit-show-explorer';
import IdDesc from './bit-show-desc/id-desc.mdx';
import DepsDesc from './bit-show-desc/deps-desc.mdx';
import DevDepsDesc from './bit-show-desc/dev-deps-desc.mdx';
import PeerDepsDesc from './bit-show-desc/peer-deps-desc.mdx';

const descriptions = [<IdDesc />, <DepsDesc />, <DevDepsDesc />, <PeerDepsDesc />];

const bitShowOutput = `
┌───────────────────┬───────────────────────────────────────────────────────────┐
│ id                │ my-org.tasks-scope/apps/to-do                             │
├───────────────────┼───────────────────────────────────────────────────────────┤
│ dependencies      │ @teambit/design.inputs.input-text@0.0.2- (component)      │
│                   │ core-js@^3.0.0-------------------------- (package)        │
├───────────────────┼───────────────────────────────────────────────────────────┤
│ dev dependencies  │ @types/testing-library__jest-dom@5.9.5- (package)         │
│                   │ @babel/runtime@7.12.18----------------- (package)         │
│                   │ @types/jest@^26.0.0-------------------- (package)         │
│                   │ @types/react-dom@^17.0.5--------------- (package)         │
│                   │ @types/react@^17.0.8------------------- (package)         │
│                   │ @types/node@12.20.4-------------------- (package)         │
├───────────────────┼───────────────────────────────────────────────────────────┤
│ peer dependencies │ @testing-library/react@^12.1.5- (package)                 │
│                   │ react-dom@^16.8.0 || ^17.0.0--- (package)                 │
│                   │ react@^16.8.0 || ^17.0.0------- (package)                 │
└───────────────────┴───────────────────────────────────────────────────────────┘`;

export const BitShowTodo = () => <BitShowExplorer bitShowOutput={bitShowOutput} descriptions={descriptions} />;
