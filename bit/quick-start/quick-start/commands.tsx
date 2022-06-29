import React from 'react';
import { CommandsExplorer } from '@teambit/community.ui.bit-cli.commands-explorer';
import { Terminal } from '@teambit/community.ui.bit-cli.terminal';

export type BitNewProps = {
  exampleValues: {
    'template-name': string;
    'workspace-name': string;
    'default-scope': string;
  };
};

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}>{children}</div>
);

export const Installation = () => (
  <Wrapper>
    <Terminal>npx @teambit/bvm install</Terminal>
  </Wrapper>
);

export const BitStatus = () => (
  <Wrapper>
    <CommandsExplorer commandName="status" />
  </Wrapper>
);

export const ScopeRename = () => (
  <Wrapper>
    <CommandsExplorer commandName="scope" subCommandName="rename" hideSubCmdMenu />
  </Wrapper>
);

export const BitStart = () => (
  <Wrapper>
    <CommandsExplorer commandName="start" commandExample={{}} />
  </Wrapper>
);

export const BitNew = ({ exampleValues }: BitNewProps) => {
  const example = {
    'template-name': exampleValues['template-name'],
    'workspace-name': exampleValues['workspace-name'],
    'default-scope': exampleValues['default-scope'],
  };
  return (
    <Wrapper>
      <CommandsExplorer commandName="new" commandExample={example} />
    </Wrapper>
  );
};

export const CdNewWorkspace = ({ children }: { children: React.ReactNode }) => (
  <Wrapper>
    <Terminal>{children}</Terminal>
  </Wrapper>
);
