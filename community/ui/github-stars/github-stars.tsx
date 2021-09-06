import React from 'react';
import millify from 'millify';
import { Icon } from '@teambit/design.elements.icon';
// import {useStars} from '@teambit/community.ui.hooks.use-stars';
import { ExternalLink } from '@teambit/design.ui.external-link';
import styles from './github-stars.module.scss';

export type GithubStarsProps =
  {} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function GithubStars({ className, ...rest }: GithubStarsProps) {
  const stars = 13895; // useStars() - cors issues
  return (
    <ExternalLink
      href="https://github.com/teambit/bit"
      {...rest}
      className={styles.githubStars}
    >
      <Icon of="github-logo" />
      <span>teambit/bit</span>
      <Icon of="experience" />
      <span>{millify(stars, { lowercase: true })}</span>
    </ExternalLink>
  );
}
