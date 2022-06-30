import React from 'react';
import { CommandsExplorer } from '@teambit/community.ui.bit-cli.commands-explorer';
import { Terminal } from '@teambit/community.ui.bit-cli.terminal';

const COMPONENT_NAME = 'apps/to-do';
const OWNER = 'my-org';
const SCOPE_NAME = 'tasks';
const FULL_SCOPE_NAME = `${OWNER}.${SCOPE_NAME}`;

const bitCreateExample = {
  'template-name': 'react',
  'component-names...': COMPONENT_NAME,
  scope: FULL_SCOPE_NAME,
};

const bitShowExample = {
  'component-name': COMPONENT_NAME,
};

export const BitCreate = () => <CommandsExplorer commandName="create" />;
export const BitCreateWithExample = () => <CommandsExplorer commandName="create" commandExample={bitCreateExample} />;

export const BitShow = () => <CommandsExplorer commandName="show" />;

export const BitShowWithExample = () => <CommandsExplorer commandName="show" commandExample={bitShowExample} />;

export const BitInit = () => <CommandsExplorer commandName="init" />;

export const BitCreateWithValues = () => <CommandsExplorer commandName="create" />;

export const BitCreateOutput = () => {
  return (
    <Terminal isOutput>
      {`1 component(s) were created

${FULL_SCOPE_NAME}.${COMPONENT_NAME}
location: ${SCOPE_NAME}/${COMPONENT_NAME}
env: teambit.react/react (set by template)`}
    </Terminal>
  );
};
