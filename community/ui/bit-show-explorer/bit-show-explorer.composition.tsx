import React from 'react';
import { BitShowExplorer } from './bit-show-explorer';
import IdDesc from './bit-show-descriptions/id-desc.demo.mdx';
import NameDesc from './bit-show-descriptions/name-desc.demo.mdx';
import ScopeDesc from './bit-show-descriptions/scope-desc.demo.mdx';

const descriptions = [<IdDesc />, <ScopeDesc />, <NameDesc />];

const bitShowExample = `
┌───────────────────┬────────────────────────────────────────────────────────────┐
│ id                │ teambit.community/ui/button                                │
├───────────────────┼────────────────────────────────────────────────────────────┤
│ scope             │ teambit.community                                          │
├───────────────────┼────────────────────────────────────────────────────────────┤
│ name              │ ui/button                                                  │
└───────────────────┴────────────────────────────────────────────────────────────┘`;

export const BasicBitShowExplorer = () => {
  return (
    <BitShowExplorer
      bitShowOutput={bitShowExample}
      descriptions={descriptions}
    />
  );
};
