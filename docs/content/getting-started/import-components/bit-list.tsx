import React from 'react';
import { BitShowExplorer } from '@teambit/community.ui.bit-show-explorer';

const descriptions = [];

const bitListOutput = `
┌───────────────────────────────┬─────────────────┬───────────────────┐
│ component ID                  │ latest in scope │ used in workspace │
├───────────────────────────────┼─────────────────┼───────────────────┤
│ my-org.tasks-scope/apps/to-do │ 0.0.2           │ 0.0.2             │
├───────────────────────────────┼─────────────────┼───────────────────┤
│ teambit.design/info/icon-text │ 0.0.8           │ 0.0.8             │
└───────────────────────────────┴─────────────────┴───────────────────┘
`;

export const BitListOutput = () => <BitShowExplorer bitShowOutput={bitListOutput} descriptions={descriptions} />;
