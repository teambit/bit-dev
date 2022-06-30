import React from 'react';
import { BitShowExplorer } from '@teambit/community.ui.bit-show-explorer';
import IdDesc from './bit-show-descriptions/id-desc.mdx';
import NameDesc from './bit-show-descriptions/name-desc.mdx';
import ScopeDesc from './bit-show-descriptions/scope-desc.mdx';
import EnvDesc from './bit-show-descriptions/env-desc.mdx';
import PackageNameDesc from './bit-show-descriptions/package-name-desc.mdx';
import DeprecatedDesc from './bit-show-descriptions/deprecated-desc.mdx';
import MainFileDesc from './bit-show-descriptions/main-file-desc.mdx';
import FilesDesc from './bit-show-descriptions/files-desc.mdx';
import DevFilesDesc from './bit-show-descriptions/dev-files-desc.mdx';
import AspectsDesc from './bit-show-descriptions/aspects-desc.mdx';
import DepsDesc from './bit-show-descriptions/deps-desc.mdx';
import DevDepsDesc from './bit-show-descriptions/dev-deps-desc.mdx';
import PeerDepsDesc from './bit-show-descriptions/peer-deps-desc.mdx';

const descriptions = [
  <IdDesc />,
  <ScopeDesc />,
  <NameDesc />,
  <EnvDesc />,
  <PackageNameDesc />,
  <DeprecatedDesc />,
  <MainFileDesc />,
  <FilesDesc />,
  <DevFilesDesc />,
  <AspectsDesc />,
  <DepsDesc />,
  <DevDepsDesc />,
  <PeerDepsDesc />,
];

const bitShowOutput = `
┌───────────────────┬───────────────────────────────────────────────────────────┐
│ id                │ my-org.tasks/apps/to-do                                   │
├───────────────────┼───────────────────────────────────────────────────────────┤
│ scope             │ my-org.tasks                                              │
├───────────────────┼───────────────────────────────────────────────────────────┤
│ name              │ apps/to-do                                                │
├───────────────────┼───────────────────────────────────────────────────────────┤
│ env               │ teambit.react/react                                       │
├───────────────────┼───────────────────────────────────────────────────────────┤
│ package name      │ @my-org/tasks.apps.to-do                                  │
├───────────────────┼───────────────────────────────────────────────────────────┤
│ deprecated        │ false                                                     │
├───────────────────┼───────────────────────────────────────────────────────────┤
│ main file         │ index.ts                                                  │
├───────────────────┼───────────────────────────────────────────────────────────┤
│ files             │ index.ts                                                  │
│                   │ to-do.composition.tsx                                     │
│                   │ to-do.docs.mdx                                            │
│                   │ to-do.spec.tsx                                            │
│                   │ to-do.tsx                                                 │
├───────────────────┼───────────────────────────────────────────────────────────┤
│ dev files         │ to-do.spec.tsx (teambit.defender/tester)                  │
│                   │ to-do.composition.tsx (teambit.compositions/compositions) │
│                   │ to-do.docs.mdx (teambit.docs/docs)                        │
├───────────────────┼───────────────────────────────────────────────────────────┤
│ aspects           │ teambit.envs/envs                                         │
│                   │ teambit.react/react                                       │
│                   │ teambit.compilation/compiler                              │
│                   │ teambit.component/dev-files                               │
│                   │ teambit.compositions/compositions                         │
│                   │ teambit.pkg/pkg                                           │
│                   │ teambit.docs/docs                                         │
│                   │ teambit.dependencies/dependency-resolver                  │
│                   │ teambit.compilation/compiler                              │
├───────────────────┼───────────────────────────────────────────────────────────┤
│ dependencies      │ core-js@^3.0.0- (package)                                 │
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
└───────────────────┴───────────────────────────────────────────────────────────┘
`;

export const BitShowExample = () => <BitShowExplorer bitShowOutput={bitShowOutput} descriptions={descriptions} />;
