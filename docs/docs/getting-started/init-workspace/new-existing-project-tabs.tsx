import React from 'react';
import { ContentTabs } from '@teambit/community.ui.content-tabs';
import styles from './styles.module.scss';
import NewProject from './new-project.mdx';
import ExistingProject from './existing-project.mdx';

const StartNew = () => <span className={styles.title}>Start a new component-driven project</span>;
const Add = () => <span className={styles.title}>Add Bit to an existing project</span>;

const content = [
  { title: StartNew, Body: NewProject },
  { title: Add, Body: ExistingProject },
];

export const NewExistingProjectTabs = () => <ContentTabs content={content} tabsUrlParam="new_existing_project" />;
