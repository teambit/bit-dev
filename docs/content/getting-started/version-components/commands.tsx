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

export const BitSnap = () => <CommandsExplorer commandName="snap" className={styles.noMarginBottom} />;

export const BitTag = () => <CommandsExplorer commandName="tag" className={styles.noMarginBottom} />;

export const SnapExample = () => {
  const example = {
    'component-pattern': 'apps/to-do',
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

export const BitReset = () => <CommandsExplorer commandName="reset" className={styles.noMarginBottom} />;

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

export const AutoSnapStatusOutput = () => (
  <Terminal isOutput>
    <span className={styles.heading}>modified components</span>
    <br />
    <br />
    <span>{` > `}</span>
    <span className={styles.component}>entities/blog-post</span>
    <span>{` ... `}</span>
    <span className={styles.greenHighlight}>ok</span>
    <br />
    <br />
    <span className={styles.heading}>
      components pending to be tagged automatically (when their dependencies are tagged)
    </span>
    <br />
    <br />
    <span>{` > `}</span>
    <span className={styles.component}>my-org.blog/pages/blog-page</span>
    <span>{` ... `}</span>
    <span className={styles.greenHighlight}>ok</span>
    <br />
    <span>{` > `}</span>
    <span className={styles.component}>my-org.blog/apps/public-blog-app</span>
    <span>{` ... `}</span>
    <span className={styles.greenHighlight}>ok</span>
  </Terminal>
);

export const LogExample = () => {
  const example = { id: 'apps/to-do' };
  return <CommandsExplorer commandName="log" commandExample={example} />;
};

export const BitLog = () => <CommandsExplorer commandName="log" />;

export const DiffExample = () => {
  const example = { 'values...': 'apps/to-do' };
  return <CommandsExplorer commandName="diff" commandExample={example} />;
};

export const CreateLaneExample = () => {
  const example = {
    'lane-name': 'new-feature',
  };
  return <CommandsExplorer commandName="lane" subCommandName="create" commandExample={example} />;
};
