import React from 'react';
import { UseCasesCard } from '@teambit/community.ui.use-cases.use-cases-card';
import { Link } from '@teambit/base-react.navigation.link';
import newProject from './new-project.svg';
import existingProject from './existing-project.svg';
import styles from './styles.module.scss';

export const ChooseWorkflow = () => {
  const pagePath = '/docs/getting-started/installing-bit/start-bit-workspace?new_existing_project=';
  return (
    <div className={styles.chooseWorkflow}>
      <Link href={`${pagePath}0`}>
        <UseCasesCard
          className={styles.card}
          title="Start a new component-driven project"
          text="Create new components using component templates."
          image={newProject}
          alt="library of frameworks"
          href="/"
        />
      </Link>

      <Link href={`${pagePath}1`}>
        <UseCasesCard
          className={styles.card}
          title="Start from an existing project"
          text="Initialize a Bit workspace on an existing project to individually source-control and export components."
          image={existingProject}
          alt="library of frameworks"
          href="/"
        />
      </Link>
    </div>
  );
};
