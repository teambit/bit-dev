import React from 'react';
import { Terminal } from '@teambit/community.ui.bit-cli.terminal';
import { CommandsExplorer } from '@teambit/community.ui.bit-cli.commands-explorer';
// @ts-ignore
import styles from './styles.module.scss';

export const CreateExample = () => {
  const example = {
    'template-name': 'react',
    'component-names...': 'apps/to-do',
    scope: 'my-org.tasks-scope',
  };
  return <CommandsExplorer commandName="create" commandExample={example} />;
};

export const BitCreateOutput = () => (
  <Terminal isOutput>{`my-org.tasks-scope/apps/to-do
    location: tasks-scope/apps/button
    env:      teambit.react/react (set by template)`}</Terminal>
);

export const SetEnv = () => <CommandsExplorer commandName="envs" subCommandName="set" />;

export const SetEnvExample = () => {
  const example = {
    'component-pattern': 'apps/to-do',
    env: 'my-org.my-scope/my-react',
  };

  return <CommandsExplorer commandName="envs" subCommandName="set" commandExample={example} />;
};

export const SetEnvOutput = () => (
  <Terminal isOutput>{`added my-org.my-scope/envs/my-react env to the following component(s):
my-org.tasks-scope/apps/to-do`}</Terminal>
);

export const BitCreateOverrideEnv = () => {
  const example = {
    'template-name': 'react',
    'component-names...': 'apps/to-do',
    env: 'my-org.my-scope/my-react',
  };
  return <CommandsExplorer commandName="create" commandExample={example} />;
};

export const CreateCustomEnvExample = () => {
  const example = {
    'template-name': 'react-env',
    'component-names...': 'envs/my-react',
    scope: 'my-org.my-scope',
  };
  return <CommandsExplorer commandName="create" commandExample={example} />;
};

export const CreateCustomEnvOutput = () => (
  <Terminal isOutput>{`1 component(s) were created

my-org.my-scope/envs/my-react
    location: my-scope/envs/my-react
    env:      teambit.envs/env (set by template)`}</Terminal>
);

export const InstallExample = () => <CommandsExplorer commandName="install" commandExample={{}} />;

export const CompileExample = () => <CommandsExplorer commandName="compile" commandExample={{}} />;

export const CompileOutput = () => {
  return (
    <Terminal isOutput>
      <>
        <div className={styles.compileHeadings}>
          {`  `}
          <span className={styles.compileHeading}>STATUS</span>
          {`       `}
          <span className={styles.compileHeading}>COMPONENT ID</span>
        </div>
        <span className={styles.checkMark}>✔</span>
        {` SUCCESS      envs/my-react`}
        <br />
        <span className={styles.checkMark}>✔</span>
        {` SUCCESS      apps/to-do`}
      </>
    </Terminal>
  );
};
