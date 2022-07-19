import React from 'react';
import { Terminal } from '@teambit/community.ui.bit-cli.terminal';
import { CommandsExplorer } from '@teambit/community.ui.bit-cli.commands-explorer';
import styles from './styles.module.scss';

export const ImportExample = () => {
  const example = { 'component-ids...': 'teambit.design/info/icon-text' };
  return <CommandsExplorer commandName="import" commandExample={example} />;
};

export const BitImport = () => <CommandsExplorer commandName="import" className={styles.noMarginBottom} />;

export const ImportOutput = () => (
  <Terminal isOutput>
    <span className={styles.greenHighlight}>✔</span>
    <span>{`  installing dependencies using pnpm`}</span>
    <br />
    <span className={styles.greenHighlight}>✔</span>
    <span>{`  running post install subscribers`}</span>
    <br />
    <span className={styles.greenHighlight}>✔</span>
    <span>{`  linking components`}</span>
    <br />
    <br />
    <span className={styles.greenHighlight}>successfully imported one component.</span>
    <br />
    <span>{`- `}</span>
    <span className={styles.greenHighlight}>added</span>
    <span className={styles.component}>{` teambit.design/info/icon-text `}</span>
    <span>{`8 new version(s) available, latest 0.0.8, currently used version 0.0.8`}</span>
  </Terminal>
);

export const ListExample = () => <CommandsExplorer commandName="list" commandExample={{}} />;

export const EjectExample = () => {
  const example = {
    'component-pattern': 'info/icon-text',
  };

  return <CommandsExplorer commandName="eject" commandExample={example} />;
};

export const BitEject = () => <CommandsExplorer commandName="eject" className={styles.noMarginBottom} />;

export const EjectOutput = () => (
  <Terminal isOutput>
    <span className={styles.greenHighlight}>✔</span>
    <span>{`  installing dependencies using pnpm`}</span>
    <br />
    <span className={styles.greenHighlight}>✔</span>
    <span>{`  running post install subscribers`}</span>
    <br />
    <span className={styles.greenHighlight}>✔</span>
    <span>{`  linking components`}</span>
    <br />
    <br />
    <span className={styles.greenHighlight}>✔</span>
    <span>{`  Eject: removing the components files from the filesystem`}</span>
    <br />
    <span className={styles.greenHighlight}>
      successfully ejected the following components teambit.design/info/icon-text@0.0.8
    </span>
  </Terminal>
);

export const ImportDependentsExample = () => {
  const example = {
    'component-ids...': 'teambit.design/info/icon-text',
    dependents: true,
  };

  return <CommandsExplorer commandName="import" commandExample={example} />;
};

export const ForkExample = () => {
  const example = {
    'source-component-id': 'teambit.design/info/icon-text',
  };

  return <CommandsExplorer commandName="fork" commandExample={example} />;
};

export const BitFork = () => <CommandsExplorer commandName="fork" className={styles.noMarginBottom} />;
