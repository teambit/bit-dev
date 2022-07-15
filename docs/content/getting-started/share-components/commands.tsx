import React from 'react';
import { Terminal } from '@teambit/community.ui.bit-cli.terminal';
import { CommandsExplorer } from '@teambit/community.ui.bit-cli.commands-explorer';
import styles from './styles.module.scss';

export const StatusExample = () => <CommandsExplorer commandName="status" commandExample={{}} />;

export const StatusOutput = () => (
  <Terminal isOutput>
    <span className={styles.heading}>staged components</span>
    <br />
    <br />
    <span>{` > `}</span>
    <span className={styles.component}>apps/to-do</span>
    <span>{` versions: 0.0.1 ... `}</span>
    <span className={styles.greenHighlight}>ok</span>
  </Terminal>
);

export const ExportExample = () => <CommandsExplorer commandName="export" commandExample={{}} />;

export const BitExport = () => <CommandsExplorer commandName="export" className={styles.noMarginBottom} />;

export const ExportOutput = () => <Terminal isOutput>1 components were exported to scope my-org.tasks-scope</Terminal>;
