import React from 'react';
import { CommandsExplorer } from '@teambit/community.ui.bit-cli.commands-explorer';
import { Terminal } from '@teambit/community.ui.bit-cli.terminal';

const REACT_APP_ID = 'learnbit.apps/react/basic-app';
const REACT_APP_NAME = 'basic-app';
const NODE_APP_ID = 'learnbit.apps/node-app';
const NODE_APP_NAME = 'hello-node-app';

/* react app commands */

export const ImportReactApp = () => {
  const example = {
    'component-ids...': REACT_APP_ID,
  };
  return <CommandsExplorer commandName="import" commandExample={example} />;
};

export const UseReactApp = () => {
  const example = {
    'component-id': REACT_APP_ID,
  };
  return <CommandsExplorer commandName="use" commandExample={example} />;
};

export const RunReactApp = () => {
  const example = {
    'app-name': REACT_APP_NAME,
  };
  return <CommandsExplorer commandName="run" commandExample={example} />;
};

export const RunReactAppOutput = () => (
  <Terminal isOutput>{`${REACT_APP_NAME} app is running on http://localhost:3000`}</Terminal>
);

/* node app commands */

export const ImportNodeApp = () => {
  const example = {
    'component-ids...': NODE_APP_ID,
  };
  return <CommandsExplorer commandName="import" commandExample={example} />;
};

export const UseNodeApp = () => {
  const example = {
    'component-id': NODE_APP_ID,
  };
  return <CommandsExplorer commandName="use" commandExample={example} />;
};

export const RunNodeApp = () => {
  const example = {
    'app-name': NODE_APP_NAME,
  };
  return <CommandsExplorer commandName="run" commandExample={example} />;
};

export const RunNodeAppOutput = () => (
  <Terminal isOutput>{`Example app listening on port 3333

${NODE_APP_NAME} app is running`}</Terminal>
);
