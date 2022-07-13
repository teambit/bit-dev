import React from 'react';
import { Terminal } from '@teambit/community.ui.bit-cli.terminal';
import { CommandsExplorer } from '@teambit/community.ui.bit-cli.commands-explorer';
import styles from './styles.module.scss';

export const LoginExample = () => <CommandsExplorer commandName="login" commandExample={{}} />;

export const LoginOutput = () => (
  <Terminal isOutput>
    <span className={styles.greenHighlight}>{`success! logged in as <account-name>`}</span>
  </Terminal>
);

export const BitScope = () => <CommandsExplorer commandName="scope" subCommandName="set" />;

export const SetScopeExample = () => {
  const example = {
    'scope-name': 'my-org.tasks-scope',
    'component-pattern': 'apps/to-do',
  };
  return <CommandsExplorer commandName="scope" subCommandName="set" commandExample={example} />;
};

export const LinkExample = () => <CommandsExplorer commandName="link" commandExample={{}} />;

export const InitExample = () => {
  const example = {
    'reset-new': true,
  };
  return <CommandsExplorer commandName="init" commandExample={example} />;
};
