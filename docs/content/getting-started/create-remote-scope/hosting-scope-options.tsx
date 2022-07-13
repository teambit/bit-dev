import React from 'react';
import { ContentTabs } from '@teambit/community.ui.content-tabs';
import styles from './styles.module.scss';
import BitCloud from './bit-cloud.mdx';
import SelfHosted from './self-hosted.mdx';

const StartNew = () => <span className={styles.title}>bit.cloud</span>;
const Add = () => <span className={styles.title}>Self-hosted</span>;

const content = [
  { title: StartNew, Body: BitCloud },
  { title: Add, Body: SelfHosted },
];

export const HostingScopeOptions = () => <ContentTabs content={content} tabsUrlParam="scope-hosting-option" />;
