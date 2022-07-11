import React from 'react';
import { Terminal } from '@teambit/community.ui.bit-cli.terminal';
import { CommandsExplorer } from '@teambit/community.ui.bit-cli.commands-explorer';
import styles from './styles.module.scss';

export const StatusExample = () => <CommandsExplorer commandName="status" commandExample={{}} />;

export const StatusOutput = () => (
  <Terminal isOutput>
    <span className={styles.heading}>new components:</span>
    <br />
    <br />
    <span>{` > `}</span>
    <span className={styles.component}>apps/to-do</span>
    <span>{` ... `}</span>
    <span className={styles.greenHighlight}>ok</span>
  </Terminal>
);

export const BitSnap = () => <CommandsExplorer commandName="snap" />;

export const BitTag = () => <CommandsExplorer commandName="tag" />;

export const SnapExample = () => {
  const example = {
    'component-name': 'apps/to-do',
  };
  return <CommandsExplorer commandName="snap" commandExample={example} />;
};

export const SnapOutput = () => (
  <Terminal isOutput>
    <span className={styles.greenHighlight}>1 component(s) snapped</span>
    <br />
    <br />
    <span className={styles.heading}>new components</span>
    <p>{`(first version for components)`}</p>
    <span>{`     > apps/to-do@9eef073f69860b34d67161a866b38530c889bb49`}</span>
  </Terminal>
);

export const TagExample = () => {
  const example = {
    'component-patterns...': 'apps/to-do',
  };

  return <CommandsExplorer commandName="tag" commandExample={example} />;
};

export const TagOutput = () => (
  <Terminal isOutput>
    <span className={styles.greenHighlight}>1 component(s) tagged</span>
    <br />
    <br />
    <span className={styles.heading}>new components</span>
    <p>{`(first version for components)`}</p>
    <span>{`     > apps/to-do@0.0.1`}</span>
  </Terminal>
);

export const BitReset = () => <CommandsExplorer commandName="reset" />;

export const ResetExample = () => {
  const example = {
    'component-pattern': 'apps/to-do',
  };

  return <CommandsExplorer commandName="reset" commandExample={example} />;
};

export const ResetOutput = () => (
  <Terminal isOutput>
    <span className={styles.greenHighlight}>1 component(s) were untagged:</span>
    <br />
    <span className={styles.component}>text/my-text.</span>
    <span>{`  version(s): 0.0.1`}</span>
  </Terminal>
);

export const CheckoutExample = () => {
  const example = {
    reset: true,
  };
  return <CommandsExplorer commandName="checkout" commandExample={example} />;
};
